import React, { Component } from 'react';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="ratings"><Ratings /></div>
        <div className="reviews"><Reviews /></div>
      </div>
    )
  }
}