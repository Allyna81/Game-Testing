import React from 'react';
import { CardContent } from 'semantic-ui-react';
import { Rating, Embed, Container, Card, Header, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './style.scss';

const GameDetails = () => (
  <div className="game-details-main">
      <Embed className="youtube-video"
        id='ssrNcwxALS4'
        placeholder= 'https://img.phonandroid.com/2020/11/ac-valhalla-benchmark-video.jpg'
        source='youtube'
      />
      <Link to={'/'}>
        <div className="back-page-icon">
          <Icon link name='angle left' />
        </div>
      </Link>
      <Card className="back">
      <Card.Content className="test">
        <Card.Header className="game-title-header">Assassin's Creed Valhalla</Card.Header>
        <Card.Meta>
          <span className="develop-by"> by Ubisoft</span>
          <p className="meta-text">Metascore</p>
        </Card.Meta>
      <CardContent>
        <div className="metascore-container">
          <Rating defaultRating={4} maxRating={5} disabled />
          <div className="ui large label metascore">
            90
          </div>
        </div>
        <div className="score-container">
          <div className="rating-container">
            <Rating defaultRating={4} maxRating={5} disabled />
            <p>Gameplay</p>  
          </div>
          <div className="rating-container">
            <Rating defaultRating={2} maxRating={5} disabled />
            <p>SoundTrack</p> 
          </div>
          <div className="rating-container">
            <Rating defaultRating={5} maxRating={5} disabled />
            <p>Graphics</p> 
          </div>
        </div>
      </CardContent>
      <Container text>
      <Header className="history-header" as='h2'>History</Header>
      <p className="history-text"> 
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
        viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
        Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
      </p>
      </Container>
        <div className="button-container">
          <Button className="reviews-button">View all reviews</Button>
        </div>
      </Card.Content>
      </Card>
  </div>
);

export default GameDetails;

