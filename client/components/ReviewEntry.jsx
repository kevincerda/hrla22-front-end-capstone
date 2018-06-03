import React from 'react';
import Wrapper from '../styles/ReviewEntry/Wrapper.js';
import Title from '../styles/ReviewEntry/Title.js';
import Date from '../styles/ReviewEntry/Date.js';
import Verified from '../styles/ReviewEntry/Verified.js';
import Body from '../styles/ReviewEntry/Body.js';
import Helpful from '../styles/ReviewEntry/Helpful.js';
import Links from '../styles/ReviewEntry/Links.js';
import Seperator from '../styles/ReviewEntry/Seperator.js';
import Button from '../styles/ReviewEntry/Button.js';

const ReviewEntry = props => (
  <Wrapper>
    Amazon Customer<br/>
    <Title>Aliquid quod illo placeat nisi molestias</Title>
    <Date>May 9, 2018</Date>
    <Verified>Verified Purchase</Verified>
    <Body>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum vero maxime est debitis! Quibusdam consectetur necessitatibus laboriosam iure, voluptatum culpa perspiciatis quod maxime nihil doloribus architecto dicta libero vitae? Culpa. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, fuga aliquam atque earum ad dolore cupiditate, vitae est aliquid tempora nobis odit expedita distinctio, delectus natus fugiat blanditiis tenetur! Necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima harum vitae, ex cupiditate quas vero, libero aperiam inventore animi dolor, repellat modi tenetur. Magni blanditiis sed error ab incidunt.<br/>
    </Body>
    <Helpful>12 people found this helpful</Helpful>
    <Links><Button>Helpful</Button><Seperator/>Comment<Seperator/>Report abuse</Links>
  </Wrapper>
)

export default ReviewEntry;