import React, { useState, useEffect} from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';
import { Card, Header, Button, Loader} from 'semantic-ui-react';
import GameCard from './GameCard';
import './style.scss';

const MainPage = ({ viewAllGamesButton }) => {
  const [gamesMoreRecent, setGamesMoreRecent] = useState([]);
  const [gamesTopRated, setGamesTopRated] = useState([]);
  const [gamesMorePopular, setGamesMorePopular] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCard = async () => {
    setLoading(true);
    const response = await axios.get('https://gametesting1.herokuapp.com')
    setGamesMoreRecent(response.data.gamesMoreRecent);
    setGamesTopRated(response.data.gamesTopRated);
    setGamesMorePopular(response.data.gamesMorePopular);
    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      await getCard();
    })()
  }, [])

return (
  loading ? 
      <Loader active inline='centered'>Loading ... wait a moment</Loader> 
    : (<div className="main mt-5">
    <div className="main-card-category">
      <Header as='h2'>Top Rated</Header>
      <Button className="view-all-button" onClick={viewAllGamesButton}>View All <span className="button-span">+</span></Button>
    </div>
      <div>
        <Card.Group itemsPerRow={1}>
          { gamesTopRated.map((game) => {
              return (
                  <GameCard 
                    key={game.id}
                    game={game}
                  />
              )
          }) }
        </Card.Group>
      </div>
      <div className="main-card-category">
        <Header as='h2'>Most Popular</Header>
        <Button  className="view-all-button" onClick={viewAllGamesButton}>View All<span className="button-span">+</span></Button>
      </div>
      <div>
        <Card.Group itemsPerRow={1}>
        { gamesMorePopular.map((game) => {
              return (
                  <GameCard 
                    key={game.id}
                    game={game}
                  />
              )
          }) }
        </Card.Group>
      </div>
      <div className="main-card-category">
        <Header as='h2'>New Releases</Header>
        <Button className="view-all-button" onClick={viewAllGamesButton}>View All <span className="button-span">+</span></Button>
      </div>
      <div>
        <Card.Group itemsPerRow={1}>
        { gamesMoreRecent.map((game) => {
            return (
                <GameCard 
                  key={game.id}
                  game={game}
                />
            )
          }) }
        </Card.Group>
      </div>
    </div>)
)
};

export default MainPage;
