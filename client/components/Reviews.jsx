import React, { Component } from 'react';
import ReviewEntry from './ReviewEntry.jsx';

export default class Reviews extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2>Top customer reviews</h2>
        <ReviewEntry />
        <ReviewEntry />
        <ReviewEntry />                
      </div>
    )
  }
}