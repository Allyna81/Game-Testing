import React, { useState, useEffect } from 'react';
import Rating from '@material-ui/lab/Rating';
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
        <img className="main-game-card-img" src="https://picsum.photos/100/80" alt='popular game' />
      <div className="main-game-card-details">
      <div className="main-game-card-title">{result.name}</div>
      <p className="main-game-card-dev">test</p>
      <span className="main-game-card-platform">PC</span>
      <span className="main-game-card-tag">test</span>
      </div>
      <div className="main-game-card-stars">
       <Rating name="read-only" value={value} readOnly size="small"/>
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
