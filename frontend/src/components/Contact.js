import React, { useState } from 'react';
import { Container, Form, Header } from 'semantic-ui-react';
import axios from 'axios';

const Contact = () => {
  const [textArea, setTextArea] = useState('')
  const [mailArea, setMailArea] = useState('')

  const handleTextArea = ( e ) => {
    e.preventDefault();
    setTextArea(e.target.value)
  }
  const handleMailArea = ( e ) => {
    e.preventDefault();
    setMailArea(e.target.value)
  }
  const handleSubmit = async ( e ) => {
    try {
      e.preventDefault();
      await axios.post(`https://gametesting1.herokuapp.com/contact`,{
        email: mailArea,
        content: textArea,
    },{
      headers:{
        "Content-Type": "application/json",
      }
    })
    setTextArea('')
    setMailArea('')
    } catch (error) {
      console.log(error.message);
    }
  }
    return(
      <Container>
        <Header as='h1'>Contact Us</Header>
        <Form onSubmit={handleSubmit}>
          <Form.TextArea className="review-label" label='Your message:' 
            value={textArea} 
            onChange={handleTextArea} 
            placeholder='Write your message here...'  
          />
          <Form.Input 
          label='Your mail:'
          value={mailArea}
          onChange={handleMailArea}
          placeholder='example@mail.com'
          />
          <Form.Button className="review-button" type="submit">Send</Form.Button>
        </Form>
      </Container>
    ) 
}

export default Contact;

