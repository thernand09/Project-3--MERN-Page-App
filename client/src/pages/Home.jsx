import React from 'react';
import SearchBar from '../components/SearchBar';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="Home">
      <SearchBar />
      {/* Other home page content */}
    </div>
  );
};

export default Home;