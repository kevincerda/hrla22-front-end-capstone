import React, { Component } from 'react';
import axios from 'axios';
import Ratings from './Ratings.jsx';
import ReviewEntry from './ReviewEntry.jsx';
import MostRecent from './MostRecent.jsx';
import LeftWrapper from '../styles/LeftWrapper.js';
import RightWrapper from '../styles/RightWrapper';
import RatingsLeftWrapper from '../styles/Ratings/LeftWrapper.js';
import RaingsRightWrapper from '../styles/Ratings/RightWrapper.js';
import Link from '../styles/ReviewEntry/Link.js';
import Container from '../styles/Ratings/Container.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 2,
      reviews: [],
    };
    this.getProductReviews = this.getProductReviews.bind(this);
    this.genRatingStars = this.genRatingStars.bind(this);
    this.handleHelpClick = this.handleHelpClick.bind(this);
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

  genRatingStars(num) {
    const rating = Array(5).fill(<i class="far fa-star"></i>);
    for (let i = 0; i < num; i++) {
      rating[i] = <i class="fas fa-star"></i>;
    }
    return rating;
  }

  getAvgRating(list) {
    return list.reduce((avg, review) => avg += review.rating, 0) / this.state.reviews.length;
  }

  countNumOfEachRating(list) {
    return list.reduce((count, review) => {
      const rating = review.rating;
      count[rating] += 1;
      return count;
    }, {1: 0, 2: 0, 3: 0, 4: 0, 5: 0});
  };

  handleHelpClick(index, val) {
    val === 'add' ? this.state.reviews[index].helpful_count += 1 : this.state.reviews[index].helpful_count -= 1;
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <Container>
          <RatingsLeftWrapper>
            <Ratings
              reviews={this.state.reviews}
              avgRating={this.getAvgRating(this.state.reviews)}
              stars={this.genRatingStars(this.getAvgRating(this.state.reviews))}
              ratingCount={this.countNumOfEachRating(this.state.reviews)}
            />
          </RatingsLeftWrapper>
          <RaingsRightWrapper>
          </RaingsRightWrapper>
        </Container>
        <LeftWrapper>
          <h2>Top customer reviews</h2>
          {this.state.reviews.map((review, index) => (
          <ReviewEntry 
            review={review}
            index={index}
            key={index} 
            stars={this.genRatingStars(review.rating)}
            handleHelpClick={this.handleHelpClick}
          />))}
          <Link><h4>See all {this.state.reviews.length} reviews ></h4></Link>
        </LeftWrapper>
        <RightWrapper>
          <MostRecent/>
        </RightWrapper>
      </div>
    )
  }
}