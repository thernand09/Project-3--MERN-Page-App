import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../utils/queries';
import SearchBar from '../components/SearchBar';
import Auth from '../utils/auth';
import { useNavigate } from 'react-router-dom';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw; /* Full viewport width */
  height: 100vh; /* Full viewport height */
  background-color: #f5f5f5; /* Light background */
  box-sizing: border-box; /* Ensure padding and border are included in width/height */
`;

const StyledSearchBar = styled(SearchBar)`
  width: 100%;
  max-width: 600px;
  margin: 1rem;
  background-color: #fff; /* White background for the search bar */
  border: 1px solid #b03a2e; /* Vintage red border */
  border-radius: 8px; /* Rounded corners */
  padding: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

const ProfileInfo = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 1.25rem;
  color: #b03a2e; /* Vintage red text color */
`;

const Home = () => {
  const navigate = useNavigate();
  const loggedIn = Auth.loggedIn();
console.log('logged in', loggedIn);
  // Use GET_USER query to fetch the logged-in user's data
  const { data, loading, error } = useQuery(GET_USER, {
    skip: !loggedIn, // Skip query if not logged in
    variables: { id: loggedIn ? Auth.getProfile().data?._id : ''}, // Get the user's ID from the JWT
  });
  console.log('hello');
  const handleSearch = (query) => {
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error loading user data.</p>;

  return (
    <HomeContainer>
      <StyledSearchBar onSearch={handleSearch} />
      {loggedIn && data ? (
        <ProfileInfo>
          <p>Welcome back, {data.user.firstName} {data.user.lastName}!</p>
          <p>Your email: {data.user.email}</p>
        </ProfileInfo>
      ) : (
        <p>Please log in to view your profile information.</p>
      )}
    </HomeContainer>
  );
};

export default Home;
