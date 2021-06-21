
import SearchBar from '../SearchBar';

import MainPage from '../MainPage';
import React, { Component } from "react";
import Footer from '../Footer';

export default class Home extends Component {
  render() {
    return <div>
        <SearchBar />
        <MainPage />
        <Footer /> 
    </div>;
  }
};
