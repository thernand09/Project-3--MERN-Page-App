// this will contain the code to format each recipe that will display on the RecipePage
//client/src/components/Recipe.jsx
import React from 'react';
import styled from 'styled-components';

const RecipeContainer = styled.div`
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem 0;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const RecipeTitle = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  color: #343a40;
`;

const RecipeImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const RecipeDescription = styled.p`
  margin: 0;
  color: #6c757d;
`;

const Recipe = ({ recipe }) => {
  return (
    <RecipeContainer>
      <RecipeTitle>{recipe.title}</RecipeTitle>
      <RecipeImage src={recipe.image} alt={recipe.title} />
      <RecipeDescription>{recipe.description}</RecipeDescription>
    </RecipeContainer>
  );
};

export default Recipe;
