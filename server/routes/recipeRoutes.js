// server/routes/recipeRoutes.js
const express = require('express');
const { searchRecipes, fetchRecipe } = require('../resolvers');
const router = express.Router();

// Route to handle search requests
router.get('/search', async (req, res) => {
  const query = req.query.query;
  try {
    const results = await searchRecipes(query);
    res.json(results);
  } catch (error) {
    console.error('Error fetching search results:', error);
    res.status(500).send('Server error');
  }
});

// Route to handle fetching a specific recipe by ID
router.get('/recipe/:id', async (req, res) => {
  try {
    const recipe = await fetchRecipe(req.params.id);
    res.json(recipe);
  } catch (error) {
    console.error('Error fetching recipe:', error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
