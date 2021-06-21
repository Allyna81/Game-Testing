import React, { Component } from 'react';
import { FormField } from 'semantic-ui-react';
import { Card, Form, Rating, Feed } from 'semantic-ui-react';
import './style.scss';

export default class Review extends Component {
  state = {}

  handleChangeGameplay  = (e, { rating, maxRating }) =>
    this.setState({ rating, maxRating })
  
  handleChangeSoundtrack  = (e, { rating, maxRating }) =>
    this.setState({ rating, maxRating })

  handleChangeGraphics  = (e, { rating, maxRating }) =>
    this.setState({ rating, maxRating })

  handleChangeGlobalRate = (e, { rating, maxRating }) =>
    this.setState({ rating, maxRating })

  render() {
    return (
    <div className="review-container">
      <Card className="write-review-container">
        <Form>
          <Form.TextArea label='Your review' placeholder='Write your review here...' />
          <FormField>
          <div>
            <Rating maxRating={5} onRate={this.handleChangeGlobalRate} />
            <p>Global rate</p>
            <pre>{JSON.stringify(this.state, null, 2)}</pre>
          </div>
          <div>
            <Rating maxRating={5} onRate={this.handleChangeGameplay} />
            <p>Gameplay</p>
            <pre>{JSON.stringify(this.state, null, 2)}</pre>
          </div>
          <div>
            <Rating maxRating={5} onRate={this.handleChangeSoundtrack} />
            <p>Soundtrack</p>
            <pre>{JSON.stringify(this.state, null, 2)}</pre>
          </div>
          <div>
            <Rating maxRating={5} onRate={this.handleChangeGraphics} />
            <p>Graphics</p>
            <pre>{JSON.stringify(this.state, null, 2)}</pre>
          </div>
          </FormField>
          <Form.Button>Send</Form.Button>
        </Form>
      </Card>
      <div className="reviews">
          <Feed>
            <Feed.Event>
              <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/laura.jpg' />
            <Feed.Content>
            <Feed.Summary>
              <a>Laura Faucet</a>
            </Feed.Summary>
            <Feed.Date>posted on July 9th 2021</Feed.Date>
              <Feed.Extra text>
                Have you seen what's going on in Israel? Can you believe it.
              </Feed.Extra>
            </Feed.Content>
            </Feed.Event>
          </Feed>
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
            <div className="rating-container">
              <Rating defaultRating={5} maxRating={5} disabled />
              <p>Global rate</p> 
            </div>
          </div>
      </div>
    </div>
    )
  }
}



