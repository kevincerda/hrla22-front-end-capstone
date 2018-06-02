import React, { Component } from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';
import LeftWrapper from '../styles/LeftWrapper.js';
import MostRecent from './MostRecent.jsx';
import RightWrapper from '../styles/RightWrapper';

const theme = {
  font: '',
}

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <LeftWrapper>
          <Ratings />
          <Reviews />
        </LeftWrapper>
        <RightWrapper>
          <MostRecent/>
        </RightWrapper>
      </div>
    )
  }
}