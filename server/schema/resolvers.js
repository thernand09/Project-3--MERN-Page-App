require('dotenv').config();
// console.log(`API Key: ${process.env.SPOONACULAR_API_KEY}`); // Log the API key to check if it is being loaded
const { AuthenticationError } = require('apollo-server-express');
const { Review, User } = require('../models');
const { signToken } = require('../utils/auth');
const fetch = require('node-fetch');


const searchRecipes = async (query) => {
  const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
    params: {
      query,
      apiKey: process.env.SPOONACULAR_API_KEY,
    },
  });
  return response.data.results;
};

const fetchRecipes = async (query) => {
  const apiKey = process.env.SPOONACULAR_API_KEY;
  const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`;

  try {
    console.log(`Fetching recipes from API: ${apiUrl}`);
    const response = await fetch(apiUrl);
    console.log(`API response status: ${response.status}`);

    if (!response.ok) {
      throw new Error(`Error fetching recipes: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`API response data: ${JSON.stringify(data)}`);

    return data.results;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch recipes');
  }
};

const resolvers = {
  Query: {
    user: async (parent, { id }) => {
      return User.findById(id);
    },
    recipes: async (parent, { query }) => {
      return fetchRecipes(query);
    },
    reviews: async (parent, { recipeId }) => {
      return Review.find({ recipeId });
    }
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addReview: async (parent, { recipeId, reviewText, rating }, context) => {
      if (context.user) {
        const review = await Review.create({
          recipeId,
          reviewText,
          rating,
          username: context.user.username
        });

        return review;
      }
      throw new AuthenticationError('Not logged in');
    }
  }
};

module.exports = resolvers;
