// client/src/components/SearchBar.jsx
import React, { useState } from 'react';
import './SearchBar.css'; // Ensure you have a corresponding CSS file

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery('');
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes..."
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
