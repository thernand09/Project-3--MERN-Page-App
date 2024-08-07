//client/src/components/Header.jsx
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #343a40;
  color: white;
  padding: 1rem 0;
  text-align: center;
  border-bottom: 1px solid #e7e7e7;
`;

const Heading = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

const Nav = styled.nav`
  margin-top: 0.5rem;

  a {
    margin: 0 1rem;
    color: #f8f9fa;
    text-decoration: none;

    &:hover {
      color: #adb5bd;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Heading>Recipe Review Blog</Heading>
      <Nav>
        <a href="/">Home</a>
        <a href="/search">Search</a>
        <a href="/login">Login</a>
        <a href="/signup">Sign Up</a>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
