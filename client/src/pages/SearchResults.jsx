// this page will display the list of recipes associated with the user's search
// need to import 
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../styles/SearchResults.css';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const query = new URLSearchParams(useLocation().search).get('query');

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`/api/search?query=${query}`);
        if (response.ok) {
          const data = await response.json();
          setResults(data);
        } else {
          setError('Failed to fetch search results');
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
        setError('An error occurred. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  return (
    <div className="SearchResults">
      <h2>Search Results for "{query}"</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {results.map((recipe) => (
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
