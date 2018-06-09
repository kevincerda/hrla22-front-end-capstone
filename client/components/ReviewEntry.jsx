import React, { Component } from 'react';
import Wrapper from '../styles/ReviewEntry/Wrapper.js';
import Name from '../styles/ReviewEntry/Name.js';
import Title from '../styles/ReviewEntry/Title.js';
import Date from '../styles/ReviewEntry/Date.js';
import Verified from '../styles/ReviewEntry/Verified.js';
import Body from '../styles/ReviewEntry/Body.js';
import Helpful from '../styles/ReviewEntry/Helpful.js';
import Links from '../styles/ReviewEntry/Links.js';
import Seperator from '../styles/ReviewEntry/Seperator.js';
import Button from '../styles/ReviewEntry/Button.js';
import RatingStars from '../styles/ReviewEntry/RatingStars.js';
import Link from '../styles/ReviewEntry/Link.js'
import Image from '../styles/ReviewEntry/ImageIcon';
import FeedbackAlert from '../styles/ReviewEntry/FeedbackAlert.js';
import FeedbackCheck from '../styles/ReviewEntry/FeedbackCheck.js';

export default class ReviewEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helpful: false,
      notHelpful: false,
    }
  }
  
  render() {
    return (
      <Wrapper id="customer-review">
        <Name id="customer-name">
          <Image src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars/default._CR0,0,1024,1024_SX48_.png"/>
          {this.props.review.customer_name ? this.props.review.customer_name : 'Amazon Customer'}
        </Name>
        <Title>
          <RatingStars id="rating-stars">{this.props.stars}</RatingStars>
          {this.props.review.title ? this.props.review.title : this.props.review.review.slice(0, 50) + '...'}
        </Title>
        <Date id="review-date">{this.props.review.date}</Date>
        <Verified id="verified">{this.props.review.verified ? 'Verified Purchase' : ''}</Verified>
        <Body id="review-body">{this.props.review.review}</Body>
        <Helpful id="help-count">
          { this.props.review.helpful_count > 1 ? this.props.review.helpful_count + ' people found this helpful' :
            this.props.review.helpful_count === 1 ? 'One person found this helpful' : '' }
        </Helpful>
        <Links>
          { this.state.helpful === false ? 
            <Button onClick={() => { this.props.handleHelpClick(this.props.index, 'add'); this.setState({ helpful: true, notHelpful: false })}}>Helpful</Button>
            :
            <FeedbackAlert>
              <FeedbackCheck><i class="fas fa-check"></i></FeedbackCheck>
              Thank you for your feedback.
            </FeedbackAlert>
          }
          { this.state.notHelpful === false ? 
            <Button onClick={() => { this.props.handleHelpClick(this.props.index, 'sub'); this.setState({ notHelpful: true, helpful: false })}}>Not Helpful</Button>
            :
            <FeedbackAlert>
              <FeedbackCheck><i class="fas fa-check"></i></FeedbackCheck>
              Thank you for your feedback.
            </FeedbackAlert>
          }
          <Seperator/>
          <Link>Comment</Link>
          <Seperator/>
          Report abuse
        </Links>
    </Wrapper>
    )
  }
}