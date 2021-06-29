import React, { useState, useEffect } from 'react';
//import Rating from '@material-ui/lab/Rating';
import { Rating } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SearchBar = () => {
    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    const value = 3;
     //We can't changed useEffect on an async await function!!! 
    //But we can do a .then OR
    //we can assign a const for an async await in the useEffect OR
    //we can make an anonymous function with the async await in the useEffect

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 750);

        return() => {
            clearTimeout(timerId);
        };
    }, [term]);

    useEffect(()=> {
       axios.post("https://gametesting1.herokuapp.com/search", {
            name: `${debouncedTerm}`
    }, {
            headers: {
                'Content-Type': 'application/json',
            } 
          })
            .then(response => {
                setResults(response.data);
            })
            .catch(err => {
                console.error(err);
            });
}, [debouncedTerm]);

const renderedResults = results.map((result) => {
    return (
        <div className="main-game-card" key={result.id}>
        <Link to={`/games/${result.id}`} >
        <img className="main-game-card-img" src={(result.cover.url).replace('t_thumb','t_cover_big')} 
        alt='popular game' 
        />
        </Link>
        
      <div className="main-game-card-details">
      <div className="main-game-card-title">{result.name}</div>
      <div>
      {result.involved_companies.slice(0,2).map((develop) => {
          return (
            <span className="main-game-card-dev">{develop.company.name}</span>
          )
        })}
      </div>
      <span>
      {result.platforms.map((platform) => {
            return (
              <div className="main-game-card-platform">
                {platform.name}
              </div>
            )
          })}
      </span>
      <span>
      {result.genres.map((type) => {
            return (
              <div className="main-game-card-tag">
                {type.name}
              </div>
            )
          })}
      </span>
      </div>
      <div className="main-game-card-stars">
        <Rating rating={result.global_rating} maxRating={5} disabled />
      </div>
      </div>
    );
});
return (
    <div>
        <div className='searchbar'>
            <div className='searchbar-container'>
                <input
                placeholder='Search games to rate..'
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                    className='input-searchbar text-light'
                />
            </div>
        </div>
        <div className='ordered'>
            {renderedResults}
        </div>
    </div>
)

};

export default SearchBar;
