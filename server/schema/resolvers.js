const { BlogPost, Recipe, User } = require('../models');
require('dotenv').config();

const apiKey = process.env.API_KEY_SPOON;
const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;


module.exports = resolvers;
