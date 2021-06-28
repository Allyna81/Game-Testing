import React, { useState, useEffect } from "react";
import axios from 'axios';
import Footer from '../Footer';
import Review from './Review';
import Form from './Form';
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

  const postGameReview = async (textArea, globalRating, gameplayRating, soundtrackRating, graphicsRating) => {
    try {
      const {accessToken}=JSON.parse(localStorage.getItem("user"));
      const response = await axios.post(`https://gametesting1.herokuapp.com/games/${gameId}/review`,{
        id: parseInt(gameId),
        content: textArea,
        gameplay_note: gameplayRating,
        soundtrack_note: soundtrackRating,
        graphism_note:graphicsRating,
        global_note: globalRating,
      },{
        headers:{
          "authorization": `Bearer ${accessToken}`, 
          "Content-Type": "application/json",
        }
      })
      console.log(response.data);
      setGameReviews([response.data, ...gameReviews]);
    } catch (error) {
      console.log(error.message);
    }
  }

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
        <Form 
          postGameReview={postGameReview}
        />
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

