// client/src/components/Footer.jsx
import React from 'react';
import './Footer.css'; // Ensure you have a corresponding CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Recipe Review Blog. All rights reserved.</p>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </footer>
  );
};

export default Footer;