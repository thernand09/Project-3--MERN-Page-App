// client/src/components/SearchBar.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  margin-right: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery('');
  };

  return (
    <Form onSubmit={handleSearch}>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for recipes..."
        required
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchBar;
