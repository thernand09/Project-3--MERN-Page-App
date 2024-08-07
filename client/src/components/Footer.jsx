// client/src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
  border-top: 1px solid #e7e7e7;
`;

const FooterText = styled.p`
  margin: 0;
  color: #6c757d;
`;

const Nav = styled.nav`
  margin-top: 0.5rem;

  a {
    margin: 0 1rem;
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 Recipe Review Blog. All rights reserved.</FooterText>
      <Nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </Nav>
    </FooterContainer>
  );
};

export default Footer;

