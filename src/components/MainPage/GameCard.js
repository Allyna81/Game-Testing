import React from 'react';
// import PropTypes from 'prop-types';
import { Card, Image, Rating } from 'semantic-ui-react';
import './style.scss';

const gameCard = () => (
  <Card>
    <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" wrapped ui={false} />
    <Card.Content>
      <Card.Header className="card-title">Assassin's Creed Valhalla</Card.Header>
      <Card.Meta>
        <span className="develop-by">Ubisoft</span>
      </Card.Meta>

      <Card.Content>
        <div className="ui mini label platform">
          PS5
        </div>
        <div className="ui mini label gametype">
          RPG
        </div>
      </Card.Content>
    </Card.Content>
    <Card.Content extra>
      <Rating defaultRating={3} maxRating={5} disabled />
    </Card.Content>
  </Card>
);

export default gameCard;
