import React, { Component } from 'react';
import ReviewEntry from './ReviewEntry.jsx';

export default class Reviews extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h3>Top customer reviews</h3>
        <ReviewEntry />
        <ReviewEntry />
        <ReviewEntry />                
      </div>
    )
  }
}