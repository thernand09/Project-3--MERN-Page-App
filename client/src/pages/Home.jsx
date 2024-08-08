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
  height: 100vh;
  background-color: #f8f9fa;
`;

const StyledSearchBar = styled(SearchBar)`
  width: 100%;
  max-width: 600px;
  margin: 0 1rem;
`;

const ProfileInfo = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 1.25rem;
`;

const Home = () => {
  const navigate = useNavigate();
  const loggedIn = Auth.loggedIn();

  // Use GET_USER query to fetch the logged-in user's data
  const { data, loading, error } = useQuery(GET_USER, {
    skip: !loggedIn, // Skip query if not logged in
    variables: { id: Auth.getProfile().data._id }, // Get the user's ID from the JWT
  });

  const handleSearch = (query) => {
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading user data.</p>;

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
