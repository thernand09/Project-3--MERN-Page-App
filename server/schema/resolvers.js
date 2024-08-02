const { AuthenticationError } = require('apollo-server-express');
const { Review, User } = require('../models');
const { signToken } = require('../utils/auth');
const fetch = require('node-fetch');

require('dotenv').config();

const SpoonacularApi = require('spoonacular-api-client');

// Create an instance of the API client
const defaultClient = SpoonacularApi.ApiClient.instance;

// Configure API key authorization
const apiKeyScheme = defaultClient.authentications['apiKeyScheme'];
apiKeyScheme.apiKey = process.env.SPOONACULAR_API_KEY; // Use environment variable to store your API key

// Uncomment the following line to set a prefix for the API key, e.g., "Token" (defaults to null)
apiKeyScheme.apiKeyPrefix = 'Token';

const api = new SpoonacularApi.DefaultApi();

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
