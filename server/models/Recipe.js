const mongoose = require('mongoose');

const { Schema } = mongoose;

const recipeSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
  sourceName: {
    type: String,
  },
  sourceURL: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  review: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review'
    }
  ]
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
