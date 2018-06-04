import React, { Component } from 'react';
import axios from 'axios';
import Ratings from './Ratings.jsx';
import ReviewEntry from './ReviewEntry.jsx';
import LeftWrapper from '../styles/LeftWrapper.js';
import RightWrapper from '../styles/RightWrapper';
import MostRecent from './MostRecent.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 2,
      reviews: [],
    };
    this.getProductReviews = this.getProductReviews.bind(this);
  }

  componentDidMount() {
    this.getProductReviews();
  }

  getProductReviews() {
    axios.get('/api/reviews/' + this.state.id)
      .then(({ data }) => {
        this.setState({ reviews: data });
      })
      .catch(err => console.log('Error fetching data', err));
  }
  
  render() {
    return (
      <div>
        <LeftWrapper>
          <h2>Top customer reviews</h2>
          {this.state.reviews.map((review, index) => (
            <ReviewEntry review={review} key={index}/>
          ))}
        </LeftWrapper>
        <RightWrapper>
          {/* <MostRecent/> */}
        </RightWrapper>
      </div>
    )
  }
}