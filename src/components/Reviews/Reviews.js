import React, { Component } from "react";
import Footer from '../Footer';
import Review from './Review';

export default class Reviews extends Component {
  render() {
    return <div>
        <Review />
        <Footer /> 
    </div>;
  }
};
