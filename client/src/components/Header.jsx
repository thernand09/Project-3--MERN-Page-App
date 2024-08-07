e
// client/src/components/Header.jsx
import React from 'react';
import './Header.css'; // Ensure you have a corresponding CSS file

const Header = () => {
  return (
    <header className="header">
      <h1>Recipe Review Blog</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/search">Search</a>
        <a href="/login">Login</a>
        <a href="/signup">Sign Up</a>
      </nav>
    </header>
  );
};

export default Header;
