import React from 'react';
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

const ReviewEntry = props => (
  <Wrapper>
    <Name>{props.review.customer_name ? props.review.customer_name : 'Amazon Customer'}</Name>
    <Title>
      <RatingStars>{props.stars}</RatingStars>
      {props.review.title ? props.review.title : props.review.review.slice(0, 50) + '...'}
    </Title>
    <Date>{props.review.date}</Date>
    <Verified>{props.review.verified ? 'Verified Purchase' : ''}</Verified>
    <Body>{props.review.review}</Body>
    <Helpful>{props.review.helpful_count} people found this helpful</Helpful>
    <Links><Button>Helpful</Button><Seperator/>Comment<Seperator/>Report abuse</Links>
  </Wrapper>
)

export default ReviewEntry;