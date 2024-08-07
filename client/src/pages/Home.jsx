// client/src/pages/Home.jsx
// includes the search bar in the middle
import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

const StyledSearchBar = styled(SearchBar)`
  width: 100%;
  max-width: 600px;
  margin: 0 1rem;
`;

const Home = () => {
  return (
    <HomeContainer>
      <StyledSearchBar />
      {/* Other home page content */}
    </HomeContainer>
  );
};

export default Home;
