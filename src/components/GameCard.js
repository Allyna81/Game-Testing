import React from 'react';
// import PropTypes from 'prop-types';
import { Card, Rating } from 'semantic-ui-react';
import './style.scss';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
  //console.log('rep result', results);
  return (
  <Card className="main-card">
    <div className="game-img-container">
  
    <Link to={`/games/${game.id}`}>
      <img 
        src={game.cover.url}
        alt="logo"
        />
    </Link>
    </div>
    
    <Card.Content className="info-container">
      <Card.Header className="card-title">{game.name}</Card.Header>
      <Card.Meta>
        {game.involved_companies.map((develop) => {
          return (
            <span className="develop-by">{develop.company.name}</span>
          )
        })}
      </Card.Meta>

      <Card.Content className="tags-container">
        
          {game.platforms.map((platform) => {
            return (
              <div className="ui mini label platform" >
                {platform.name}
              </div>
            )
          })}
          {game.genres.map((type) => {
            return (
              <div className="ui mini label gametype">
                {type.name}
              </div>
            )
          })}
        <div className="rating-container">
          <Rating defaultRating={3} maxRating={5} disabled />
        </div>
      </Card.Content>
    </Card.Content>
  </Card>
  );
};

export default GameCard;
