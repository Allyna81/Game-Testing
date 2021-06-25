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
       axios({
            url: "https://salouacorsproxy.herokuapp.com/https://api.igdb.com/v4/games",
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Client-ID': 'plbo27qmimbe14tlxxhdgobp10x6qv',
                'Authorization': 'Bearer o3j1a03faukeyjaxi9196xmydxd6lq',
            },
            data: `fields age_ratings,aggregated_rating,aggregated_rating_count,artworks,bundles,category,checksum,collection,cover,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,category,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;search"${debouncedTerm}";`
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
