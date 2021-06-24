import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { CardContent } from 'semantic-ui-react';
import { Rating, Embed, Container, Card, Header, Button, Icon } from 'semantic-ui-react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from "react-player";
import './style.scss';

const GameDetails = () => {
  const { gameId } = useParams();
  console.log(gameId)

  const [gameDetail, setGameDetail] = useState([]);
  const [gameRate, setGameRate] = useState([]);
  const [gameUrl, setGameUrl] = useState('');

  const getGameDetail = async () => {
    const response = await axios.get(`https://gametesting1.herokuapp.com/games/${gameId}`)
    setGameDetail(response.data.game[0]);
    setGameRate(response.data.popularity);
    setGameUrl(response.data.game[0].videos[0].video_id);
  };

  useEffect(() => {
    (async () => {
      await getGameDetail();
    })()
  }, [])
  console.log(gameUrl);
  return (
    <div className="game-details-main ">
    <div className="youtube-container">
      <ReactPlayer
        url= {"https://www.youtube.com/watch?v=" + gameUrl}
        width='100%'
        height='100%'
      />
    </div>
    <Link to={'/'}>
      <div className="back-page-icon">
        <Icon link name='angle left' />
      </div>
    </Link>
    <Card className="back">
    <Card.Content className="test">
      <Card.Header className="game-title-header">{gameDetail.name}</Card.Header>
      <Card.Meta>
        <span className="develop-by"></span>
        <p className="meta-text">Metascore</p>
      </Card.Meta>
    <CardContent>
      <div className="metascore-container">
        <Rating rating={gameRate.global_note_global} maxRating={5} disabled />
        <div className="ui large label metascore">
          {Math.round(gameDetail.aggregated_rating)}
        </div>
      </div>
      <div className="score-container">
        <div className="rating-container">
          <Rating rating={gameRate.gameplay_note_global} maxRating={5} disabled />
          <p>Gameplay</p>  
        </div>
        <div className="rating-container">
          <Rating rating={gameRate.soundtrack_note_global} maxRating={5} disabled />
          <p>SoundTrack</p> 
        </div>
        <div className="rating-container">
          <Rating rating={gameRate.graphism_note_global} maxRating={5} disabled />
          <p>Graphics</p> 
        </div>
      </div>
    </CardContent>
    <Container text>
    <Header className="history-header" as='h2'>History</Header>
    <p className="history-text"> 
      {gameDetail.summary}
    </p>
    </Container>
      <div className="button-container">
      <Link to={`/games/${gameId}/review`}>
        <Button className="reviews-button">View all reviews ({gameRate.count})</Button>
      </Link>
      </div>
    </Card.Content>
    </Card>
</div>
  )
};

export default GameDetails;

