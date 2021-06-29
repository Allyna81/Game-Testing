import React, { useState } from 'react';
import { FormField } from 'semantic-ui-react';
import { Container, Form, Rating} from 'semantic-ui-react';

const PostReview = ({ postGameReview }) => {
  const [textArea, setTextArea] = useState('')
  const [globalRating, setGlobalRating] = useState(0);
  const [gameplayRating, setGameplayRating] = useState(0);
  const [soundtrackRating, setSoundtrackRating] = useState(0);
  const [graphicsRating, setGraphicsRating] = useState(0);

const handleTextArea = ( e ) => {
  e.preventDefault();
  setTextArea(e.target.value)
}

const handleChangeGlobalRate = (e, { rating }) => {
  e.preventDefault();
  setGlobalRating(rating);
  console.log(rating);
}
const handleChangeGameplayRate = (e, { rating }) => {
  e.preventDefault();
  setGameplayRating(rating);
  console.log(rating);
}
const handleChangeSountrackRate = (e, { rating }) => {
  e.preventDefault();
  setSoundtrackRating(rating);
  console.log(rating);
}
const handleChangeGraphicsRate = (e, { rating }) => {
  e.preventDefault();
  setGraphicsRating(rating);
  console.log(rating);
}
console.log(textArea);
console.log(globalRating);
console.log(gameplayRating);
console.log(soundtrackRating);
console.log(graphicsRating);

const handleSubmit = async ( e ) => {
  e.preventDefault();
  await postGameReview(
    textArea,
    globalRating,
    gameplayRating,
    soundtrackRating,
    graphicsRating,
  )
  setTextArea('')
  setGlobalRating(0)
  setGameplayRating(0)
  setSoundtrackRating(0)
  setGraphicsRating(0)

}
  return (
    <Container className="write-review-container">
      <Form className="review-form" onSubmit={handleSubmit}>
        <Form.TextArea className="review-label" label='Your review' value={textArea} onChange={handleTextArea} placeholder='Write your review here...' />
        <FormField>
        <div className="write-review-rating-container global-rate">
          <Rating
            rating={globalRating}
            maxRating={5} 
            onRate={handleChangeGlobalRate} 
          />
          <p>Global rate</p>
        </div>
        <div className="write-review-rating-container">
          <Rating
            rating={gameplayRating}
            maxRating={5} 
            onRate={handleChangeGameplayRate} 
          />
          <p>Gameplay</p>
        </div>
        <div className="write-review-rating-container">
          <Rating
            rating={soundtrackRating}
            maxRating={5}
            onRate={handleChangeSountrackRate}
          />
          <p>Soundtrack</p>
        </div>
        <div className="write-review-rating-container">
          <Rating
            rating={graphicsRating}
            maxRating={5}
            onRate={handleChangeGraphicsRate}
          />
          <p>Graphics</p>
        </div>
        </FormField>
        <Form.Button className="review-button" type="submit">Send</Form.Button>
      </Form>
    </Container>
  )
}

export default PostReview;
