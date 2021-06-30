import React, { useEffect, useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import axios from 'axios';
import './styles/style.css';
import Loader from './Loader';
import { Link, NavLink } from 'react-router-dom';
import Footer from './Footer';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const NewReleases = () => {
    const [current, setCurrent] = useState(0);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const length = 7;
    const value = 4;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };
    const gameByCategory = async () => {
        setLoading(true);
        const { data } = await axios.get("https://gametesting1.herokuapp.com/",
          { 'Access-Control-Allow-Origin': '*', });
        setResults(data.gamesMoreRecent);
        setLoading(false);
      };
  
      useEffect(() => {(async() => { await gameByCategory();
      })()
    }, [])
    const renderedResults = results.map((result) => {

  const rewrites = {
    "PlayStation 5": 'PS5',
    "PC (Microsoft Windows)": 'PC',
    "PlayStation 4": 'PS4',
    "Nintendo Switch": 'Switch',
    "Xbox Series": 'Xbox',
    "Xbox One": 'Xbox'
  };
  const rewrittenPlatforms = result.platforms.map(({ id, name }) => ({
    id,
    name: rewrites[name] ?? null // Use rewritten name, if present, otherwise use old name.
  }));
        return (
            <div style={{ transform: `translateX(-${current * 50}%)`, transitionDuration: '1s' }} key={result.id}>
                <div className="main-game-card" >
                <Link to={`/games/${result.id}`}>
                    <img className="main-game-card-img" src={(result.cover.url).replace('t_thumb', 't_cover_big')} alt='popular game' />
                    </Link>
                    <div className="main-game-card-details">
                        <div className="main-game-card-title">{result.name}</div>
                        <p className="main-game-card-dev">{result.involved_companies[0].company.name}</p>
                                
                                    {rewrittenPlatforms.map(({name}) => 
                                    name === null ? <span className='null'></span> :
                                        <span className="main-game-card-platform">{name}</span>
                                    )}
                                
                        {result.genres.map((genre) => <span className="main-game-card-tag">{genre.name}</span>)}
                    </div>
                    <div className="main-game-card-stars">
                        <Rating name="read-only" value={value} readOnly size="small" />
                    </div>
                </div>
            </div>
        );
    });
    return (
        loading ?  <Loader /> : (
        <>
            <div className='main-title'>
                <h1>New Releases</h1>
                <NavLink to={'/games'} className='main-view-all'>
                        <span >View all</span>
                    </NavLink>
            </div>
            <div className='main-slider reset'>
                <MdKeyboardArrowLeft className='main-left-arrow' onClick={prevSlide} />
                <MdKeyboardArrowRight className='main-right-arrow' onClick={nextSlide} />
                {renderedResults}
            </div>
            <Footer /> 
        </>
        )
    );

};

export default NewReleases;