import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_RECIPES } from '../utils/queries';

const SearchResults = () => {
  const query = new URLSearchParams(useLocation().search).get('query');

  // Use the GET_RECIPES query to fetch recipes based on the search query
  const { loading, error, data } = useQuery(GET_RECIPES, {
    variables: { query },
    skip: !query, // Skip the query if no search query is provided
  });

  return (
    <div className="SearchResults">
      <h2>Search Results for "{query}"</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error">{error.message}</p>
      ) : data?.recipes.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {data.recipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <h3>{recipe.title}</h3>
                <img src={recipe.image} alt={recipe.title} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
