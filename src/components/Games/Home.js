import React from 'react';
import { Link } from 'react-router-dom';

import Logo from './logo.svg';
import SearchBar from '../SearchBar';

const Home = () => (
  <div>
    <Link to="/" className="item">
      <img src={Logo} alt="Logo GameTesting" />
    </Link>
    <SearchBar />
  </div>
);

export default Home;
