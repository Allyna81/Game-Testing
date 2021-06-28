import React from 'react';
import axios from 'axios';
import { Container, Rating, Feed, Icon, Button } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';
import './style.scss';

const Review = ({ review }) => {
  const reviewId = review.id;
  const { gameId } = useParams();

  const handleClickReport = async () => {
    try {
      await axios.patch(`https://gametesting1.herokuapp.com/games/${gameId}/review/${reviewId}/report`, null, {   
        headers: {
          "authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.VGVzdFJlcG9ydGluZw.hgnb54DyirsfnL4_FNUUSMkz6eCyYJtFdvfNQ_y_Hq8`,  // Token à enlever quand Login OK !!
          "Content-Type": "application/json",
        }
      })

    } catch (error) {
      console.log(error.message);
    }
  }
    return (
    <div className="review-container">
      <Container className="reviews">
          <Feed>
            <Feed.Event>
              <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/laura.jpg' />
            <Feed.Content>
            <Feed.Summary>
              <a className="summary-profile">{review.pseudo}</a>
            </Feed.Summary>
            <Feed.Date>posted on {review.review_date}</Feed.Date>
              <Feed.Extra text>
                {review.content}
              </Feed.Extra>
            </Feed.Content>
            </Feed.Event>
          </Feed>
          <div className="score-container">
            <div className="rating-container">
              <Rating rating={review.gameplay_note} maxRating={5} disabled />
              <p>Gameplay</p>  
            </div>
            <div className="rating-container">
              <Rating rating={review.soundtrack_note} maxRating={5} disabled />
              <p>SoundTrack</p> 
            </div>
            <div className="rating-container">
              <Rating rating={review.graphism_note} maxRating={5} disabled />
              <p>Graphics</p> 
            </div>
            <div className="rating-container global-rate">
              <Rating rating={review.global_note} maxRating={5} disabled />
              <p>Global rate</p> 
            </div>
            <div className="report-icon">
              <Icon link name='exclamation' />
              <Button onClick={handleClickReport}>report</Button>
            </div>
          </div>
      </Container>
    </div>
    )
  }

export default Review;

