import React, { Component } from 'react';

export default class Ratings extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Customer Reviews</h1>
        stars here<h4>3,240</h4>4.4 out of 5 stars
        <div>Bar graph here</div>
        <h4>See all 3,240 customer reviews ></h4>
      </div>
    )
  }
}