import React from 'react';
import ReviewWrapper from '../styles/ReviewWrapper.js'
import FontAwesome from 'react-fontawesome';


const ReviewEntry = props => (
  <ReviewWrapper>
    Amazon Customer<br/>
    <FontAwesome name='star'/>
    <b>Aperiam aliquid quod illo placeat nisi molestias</b><br/>
    May 9, 2018 | Verified Purchased<br/>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum vero maxime est debitis! Quibusdam consectetur necessitatibus laboriosam iure, voluptatum culpa perspiciatis quod maxime nihil doloribus architecto dicta libero vitae? Culpa. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, fuga aliquam atque earum ad dolore cupiditate, vitae est aliquid tempora nobis odit expedita distinctio, delectus natus fugiat blanditiis tenetur! Necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima harum vitae, ex cupiditate quas vero, libero aperiam inventore animi dolor, repellat modi tenetur. Magni blanditiis sed error ab incidunt.<br/>
    12 people found this helpful<br/>
    <button>Helpful</button><button>Not Helpful</button> | Comment | Report abuse
  </ReviewWrapper>
)

export default ReviewEntry;