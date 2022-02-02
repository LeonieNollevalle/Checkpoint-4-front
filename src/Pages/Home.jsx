import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to="/category/1">
        <h2>Édtions</h2>
      </Link>
      <Link to="/category/2">
        <h2>Identités</h2>
      </Link>
      <Link to="/category/3">
        <h2>Interface</h2>
      </Link>
      <Link to="/category/4">
        <h2>Typographie</h2>
      </Link>
      <Link to="/category/5">
        <h2>Motion</h2>
      </Link>
    </div>
  );
};

export default Home;
