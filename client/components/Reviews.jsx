import React, { Component } from 'react';
import Axios from 'axios';
import Ratings from './Ratings.jsx';
import ReviewEntry from './ReviewEntry.jsx';
import LeftWrapper from '../styles/LeftWrapper.js';
import RightWrapper from '../styles/RightWrapper';
import MostRecent from './MostRecent.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <LeftWrapper>
          <h2>Top customer reviews</h2>
          <ReviewEntry />
          <ReviewEntry />
          <ReviewEntry />   
        </LeftWrapper>
        <RightWrapper>
          <MostRecent/>
        </RightWrapper>
      </div>
    )
  }
}