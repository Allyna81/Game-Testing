import React from 'react';
// import PropTypes from 'prop-types';
import { Card, Header, Button } from 'semantic-ui-react';
import GameCard from './GameCard';
import './style.scss';

const mainPage = ({ viewAllGamesButton }) => (
  <div className="main">
    <div className="main-card-category">
      <Header as='h2'>Most Popular</Header>
      <Button>View All</Button>
    </div>
    <div>
      <Card.Group itemsPerRow={2}>
        <GameCard />
        <GameCard />
      </Card.Group>
    </div>
    <div className="main-card-category">
      <Header as='h2'>Top Rated</Header>
      <Button onClick={viewAllGamesButton}>View All</Button>
    </div>
    <div>
      <Card.Group itemsPerRow={2}>
        <GameCard />
        <GameCard />
      </Card.Group>
    </div>
    <div className="main-card-category">
      <Header as='h2'>New Releases</Header>
      <Button>View All</Button>
    </div>
    <div>
      <Card.Group itemsPerRow={2}>
        <GameCard />
        <GameCard />
      </Card.Group>
    </div>
  </div>
);

export default mainPage;
