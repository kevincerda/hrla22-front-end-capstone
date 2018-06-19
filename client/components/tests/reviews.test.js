import React from 'react';
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Reviews from '../Reviews.jsx';
import ReviewEntry from '../ReviewEntry.jsx';
import Ratings from '../Ratings.jsx';

configure({ adapter: new Adapter() });

describe('Reviews Component', () => {

  it('Should render the Reviews Component', () => {
    expect(shallow(<Reviews />).find('#reviews-component').exists()).toBe(true);
  });

  it('Should render the total average review stars', () => {
    expect(shallow(<Reviews />).find('#ratings').exists()).toBe(true);
  });

  it('Should render top customer reviews', () => {
    expect(shallow(<Reviews />).find('#top-reviews').exists()).toBe(true);
  });

});

xdescribe('Ratings Component', () => {

  it('Should render the Ratings Component', () => {
    mount(<Ratings />).setProps({ reviews: ['hi'] });
    expect(mount(<Ratings />).find('#ratings-component').exists()).toBe(true);
  });

});

describe('Review Component', () => {

  it('Should render the Reviews Component', () => {
    mount(<Reviews />).setProps({ reviews: ['hi'] });
    expect(mount(<Reviews />).find('#ratings-component').exists()).toBe(true);
  });

  xit('Should render customer reviews', () => {
    mount(<ReviewEntry />).setProps({ reviews: ['hi'] });
    expect(mount(<ReviewEntry />).find('#customer-review').exists()).toBe(true);
  });

  xit('Should render the customer\'s name', () => {
    expect(shallow(<ReviewEntry />).find('#customer-name').exists()).toBe(true);
  });

  xit('Should render rating stars per review', () => {
    expect(shallow(<ReviewEntry />).find('#rating-stars').exists()).toBe(true);
  });

  xit('Should render the review date', () => {
    expect(shallow(<ReviewEntry />).find('#review-date').exists()).toBe(true);
  });

  xit('Should render the review verified status', () => {
    expect(shallow(<ReviewEntry />).find('#verified').exists()).toBe(true);
  });

  xit('Should render the review body', () => {
    expect(shallow(<ReviewEntry />).find('#review-body').exists()).toBe(true);
  });

  xit('Should render the review helpful count', () => {
    expect(shallow(<ReviewEntry />).find('#help-count').exists()).toBe(true);
  });

});