const db = require('../config/connection');
const cleanDB = require('./cleanDB');
const { Recipe, Review, User } = require('../models');

const userData = require('./userData.json');
const reviewData = require('./reviewData.json');
const recipeData = require('./recipeData.json');

db.once('open', async () => {
  await cleanDB('User', 'users');

  await User.insertMany(userData);

  console.log('User data seeded!');
  process.exit(0);
});

db.once('open', async () => {
    await cleanDB('Review', 'reviews');
  
    await User.insertMany(reviewData);
  
    console.log('Review data seeded!');
    process.exit(0);
  });

  db.once('open', async () => {
    await cleanDB('Recipe', 'recipes');
  
    await User.insertMany(recipeData);
  
    console.log('Recipe data seeded!');
    process.exit(0);
  });