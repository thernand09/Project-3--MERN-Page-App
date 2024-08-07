// this will contain the code to format each recipe that will display on the RecipePage
// client/src/components/Recipe.jsx
import React from 'react';
import './Recipe.css'; // Ensure you have a corresponding CSS file

const Recipe = ({ recipe }) => {
  return (
    <div className="recipe">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <p>{recipe.description}</p>
    </div>
  );
};

export default Recipe;
