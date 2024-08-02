const { AuthenticationError } = require('apollo-server-express');
const { Review, User } = require('../models');
const { signToken } = require('../utils/auth');
const fetch = require('node-fetch');

require('dotenv').config();

// const apiKey = process.env.API_KEY_SPOON;
// const apiUrl = 'https://api.spoonacular.com/recipes/complexSearch';

const resolvers = {
    Query: {
        // Fetch a user by ID
        user: async (parent, { id }) => {
          return User.findById(id);
        },
        // Fetch all recipes from an external API
        recipes: async () => {
          const response = await fetch (apiUrl);
          const data = await response.json();
          return data.results;
        },
        // Fetch favorite recipes for the logged-in user
        favoriteRecipes: async (parent, args, context) => {
          if (context.user) {
            const user = await User.findById(context.user._id).populate('favorites');
            return user.favorites;
          }
          throw new AuthenticationError('Not logged in');
        },
        // Fetch reviews for a specific recipe
        reviews: async (parent, { recipeId }) => {
          return Review.find({ recipeId });
        }
      },
      Mutation: {
        // User sign-up
        addUser: async (parent, { username, email, password }) => {
          const user = await User.create({ username, email, password });
          const token = signToken(user);
          return { token, user };
        },
        // User login
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
        // Add a recipe to favorites
        favoriteRecipe: async (parent, { recipeId }, context) => {
          if (context.user) {
            const user = await User.findById(context.user._id);
            user.favorites.push(recipeId);
            await user.save();
            return user;
          }
          throw new AuthenticationError('Not logged in');
        },
        // Add a review to a recipe
        addReview: async (parent, { title, content }, context) => {
          if (context.user) {
            const review = await Review.create({
              title,
              content,
              author: context.user._id,
            });
    
            return review;
          }
          throw new AuthenticationError('Not logged in');
        }
      }
    };

module.exports = resolvers;
