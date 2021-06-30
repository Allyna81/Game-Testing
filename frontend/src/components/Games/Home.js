
import SearchBar from '../SearchBar';

import React, { Component } from "react";

import MostPopular from '../MostPopular';
import TopRated from '../TopRated';
import NewReleases from '../NewReleases';

export default class Home extends Component {
  render() {
    return <div className='reset'>
      
        <SearchBar />
        <MostPopular />
        <TopRated />
        <NewReleases />
    </div>;
  }
};

