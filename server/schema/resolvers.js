const { AuthenticationError } = require('apollo-server-express');
const { Review, User } = require('../models');
const { signToken } = require('../utils/auth');
const fetch = require('node-fetch');

require('dotenv').config();

const fetchRecipes = async (query) => {
  const apiKey = process.env.SPOONACULAR_API_KEY;
  const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}&number=10`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Error fetching recipes: ${response.statusText}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch recipes');
  }
};


const resolvers = {
    Query: {
        // Fetch a user by ID
        user: async (parent, { id }) => {
          return User.findById(id);
        },
        // Fetch all recipes from an external API
        recipes: async (parent, {query}) => {
          return fetchRecipes(query)
        },
        // Fetch reviews for a specific recipe
        reviews: async (parent, { recipeId }) => {
          return Review.find({ recipeId });
        }
      },
      // Mutation: {
      //   // User sign-up
      //   addUser: async (parent, { username, email, password }) => {
      //     const user = await User.create({ username, email, password });
      //     const token = signToken(user);
      //     return { token, user };
      //   },
      //   // User login
      //   login: async (parent, { email, password }) => {
      //     const user = await User.findOne({ email });
      //     if (!user) {
      //       throw new AuthenticationError('Incorrect credentials');
      //     }
    
      //     const correctPw = await user.isCorrectPassword(password);
      //     if (!correctPw) {
      //       throw new AuthenticationError('Incorrect credentials');
      //     }
    
      //     const token = signToken(user);
      //     return { token, user };
      //   },
      //   addReview: async (parent, { title, content }, context) => {
      //     if (context.user) {
      //       const review = await Review.create({
      //         title,
      //         content,
      //         author: context.user._id,
      //       });
    
      //       return review;
      //     }
      //     throw new AuthenticationError('Not logged in');
      //   }
      // }
    };

module.exports = resolvers;
