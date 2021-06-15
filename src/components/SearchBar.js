import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './style.css';
import fakeimg from './gameimg.svg';

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
      const { data } = await axios.get('https://salouacorsproxy.herokuapp.com/https://api.igdb.com/v4/games/', {
        headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/json',
          'Client-ID': 'plbo27qmimbe14tlxxhdgobp10x6qv',
          Authorization: 'Bearer o3j1a03faukeyjaxi9196xmydxd6lq',
        },
        body: {
          search: debouncedTerm,
        },
        data: 'fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;',
      });
      setResults(data);
    };
    search();
  }, [debouncedTerm]);

  const renderedResults = results.map((result) => (
    <div className="game" key={result.id}>
      <img className="game-img" src={fakeimg} alt="fakegame img" />
    </div>

  ));

  return (
    <div>
      <div className="ui form">
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
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
};

export default SearchBar;
