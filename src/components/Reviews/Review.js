import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FormField } from 'semantic-ui-react';
import { Container, Form, Rating, Feed, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.scss';

const Review = ({ review }) => {


  /*handleChangeGameplay  = (e, { rating, maxRating }) =>
    this.setState({ rating, maxRating })
  
  handleChangeSoundtrack  = (e, { rating, maxRating }) =>
    this.setState({ rating, maxRating })

  handleChangeGraphics  = (e, { rating, maxRating }) =>
    this.setState({ rating, maxRating })

  handleChangeGlobalRate = (e, { rating, maxRating }) =>
    this.setState({ rating, maxRating })*/

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
            <Feed.Date>posted on July 9th 2021</Feed.Date>
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
              <p>report</p>
            </div>
          </div>
      </Container>
    </div>
    )
  }

export default Review;

