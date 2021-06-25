import React, { useState, useEffect } from "react";
import axios from 'axios';
import Footer from '../Footer';
import Review from './Review';
import { Link, useParams } from 'react-router-dom';
import { Icon } from "semantic-ui-react";
import './style.scss';

const Reviews = () => { 
  const { gameId } = useParams();

  const [gameReviews, setGameReviews] = useState([]);
  

  const getGameReview = async () => {
    const response = await axios.get(`https://gametesting1.herokuapp.com/games/${gameId}/review`)
    setGameReviews(response.data);
    console.log(response);
  };

  useEffect(() => {
    (async () => {
      await getGameReview();
    })()
  }, [])
    return (
      <div className="reviews-container">
        <Link to={`/games/${gameId}`}>
          <div className="back-page-icon-bis">
            <Icon link name='angle left' />
            <p>Back to game</p>
          </div>
        </Link>
      { gameReviews.map((review) => {
        return (
          <Review 
            key={review.id}
            review={review}
          />
        )
      }) }
        <Footer /> 
      </div>
    )
  };

export default Reviews;
