import React from 'react';
// import PropTypes from 'prop-types';
import { Card, Rating } from 'semantic-ui-react';
import './style.scss';
import { Link } from 'react-router-dom';

const gameCard = () => (
  <Card className="main-card">
    <div className="game-img-container">
    <Link to={'/games/:id'}> 
      <img 
        src="https://image.jeuxvideo.com/medias/158826/1588264398-815-jaquette-avant.jpg"
        alt="logo"
        />
        </Link>
    </div>
    
    <Card.Content className="info-container">
      <Card.Header className="card-title">Assassin's Creed Valhalla</Card.Header>
      <Card.Meta>
        <span className="develop-by">Ubisoft</span>
      </Card.Meta>

      <Card.Content className="tags-container">
        <div className="ui mini label platform">
          PS5
        </div>
        <div className="ui mini label gametype">
          action
        </div>
        <div className="rating-container">
          <Rating defaultRating={3} maxRating={5} disabled />
        </div>
      </Card.Content>
    </Card.Content>
  </Card>
);

export default gameCard;
