import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './style.css';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  // We can't changed useEffect on an async await function!!!
  // But we can do a .then OR
  // we can assign a const for an async await in the useEffect OR
  // we can make an anonymous function with the async await in the useEffect

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1500);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos', {
        params: {
          query: debouncedTerm,
        },
      });
      setResults(data);
    };
    search();
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => (

    <div className="game" key={result.id}>
      <img src={result.url} alt="fake img" className="game-img" />

      <h1 className="game-title">{result.title}</h1>
    </div>
  ));

  return (
    <div>
      <div className="searchbar-container">
        <div className="searchbar">
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
            type="text"
            placeholder="Search games to rate.."
          />
          <i aria-hidden="true" className="search icon" />
        </div>
      </div>
      <div className="">
        {renderedResults}
      </div>
    </div>
  );
};

export default SearchBar;
