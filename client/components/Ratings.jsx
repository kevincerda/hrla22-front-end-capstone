import React, { Component } from 'react';
import BarDiv from '../styles/Ratings/BarDiv.js';
import Link from '../styles/ReviewEntry/Link.js';
import Stars from '../styles/Ratings/Stars.js';
import Progress from '../styles/Ratings/Progress.js';
import Bar from '../styles/Ratings/Bar.js'

export default class Ratings extends Component {
  constructor(props) {
    super(props);
  }

  getPercentage(rating) {
    return Math.round(rating / this.props.reviews.length * 100);
  }

  render() {
    return (
      <div>
        <h1>Customer Reviews</h1>
        <Stars>{this.props.stars}{this.props.reviews.length}</Stars>
        <Link>{this.props.avgRating} out of 5 stars</Link>
        <Link><BarDiv>5 star<Progress><Bar percent={this.getPercentage(this.props.ratingCount[5])}></Bar></Progress>{this.getPercentage(this.props.ratingCount[5])}%</BarDiv></Link>
        <Link><BarDiv>4 star<Progress><Bar percent={this.getPercentage(this.props.ratingCount[4])}></Bar></Progress>{this.getPercentage(this.props.ratingCount[4])}%</BarDiv></Link>
        <Link><BarDiv>3 star<Progress><Bar percent={this.getPercentage(this.props.ratingCount[3])}></Bar></Progress>{this.getPercentage(this.props.ratingCount[3])}%</BarDiv></Link>
        <Link><BarDiv>2 star<Progress><Bar percent={this.getPercentage(this.props.ratingCount[2])}></Bar></Progress>{this.getPercentage(this.props.ratingCount[2])}%</BarDiv></Link>
        <Link><BarDiv>1 star<Progress><Bar percent={this.getPercentage(this.props.ratingCount[1])}></Bar></Progress>{this.getPercentage(this.props.ratingCount[1])}%</BarDiv></Link>
        <Link><h4>See all {this.props.reviews.length} customer reviews ></h4></Link>
      </div>
    )
  }
}