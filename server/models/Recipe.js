const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true
  },
  uri: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String
  },
  source: {
    type: String
  },
  url: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  blogPosts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BlogPost'
    }
  ]
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
