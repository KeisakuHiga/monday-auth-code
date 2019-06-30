import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    <div className="country-container">
      <div>
        <Link to="/list" className="homepage-links">List countries</Link>
      </div>
      <div>
        <Link to="/search" className="homepage-links">Search countries</Link>
      </div>
    </div>
  )
}

export default Home;