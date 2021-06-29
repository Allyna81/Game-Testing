import React from 'react';
import { Card, Rating } from 'semantic-ui-react';
import './style.scss';
import { Link } from 'react-router-dom';

const GameCard = ({ game }) => {
  return (
  <Card className="main-card">
    <div className="game-img-container">
  
    <Link to={`/games/${game.id}`}>
      <img 
        src={(game.cover.url).replace('t_thumb','t_cover_big')}
        alt="logo"
        />
    </Link>
    </div>
    
    <Card.Content className="info-container">
      <Card.Header className="card-title">{game.name}</Card.Header>
      <Card.Meta className="game-develop-container">
        {game.involved_companies.slice(0,2).map((develop) => {
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
          <Rating rating={game.global_rating} maxRating={5} disabled />
        </div>
      </Card.Content>
    </Card.Content>
  </Card>
  );
};

export default GameCard;
