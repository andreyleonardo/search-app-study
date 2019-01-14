import React from 'react';
import Ratings from './Ratings';

const getRatings = (props, children) => (
  shallow(<Ratings {...props}>{children}</Ratings>)
);

describe('Ratings', () => {
  it('renders without crash', () => {
    const ratings = getRatings({ rating: 0 });

    expect(ratings).toMatchSnapshot();
  });

  it('renders a SadIcon when rating is between 0 and 1', () => {
    const ratings = getRatings({ rating: 0 });

    expect(ratings.exists('SadIcon')).toBeTruthy();
  });

  it('renders a WonderingIcon when rating is between 1.1 and 2', () => {
    const ratings = getRatings({ rating: 1.1 });

    expect(ratings.exists('WonderingIcon')).toBeTruthy();
  });

  it('renders a NeutralIcon when rating is between 2.1 and 3', () => {
    const ratings = getRatings({ rating: 2.1 });

    expect(ratings.exists('NeutralIcon')).toBeTruthy();
  });

  it('renders a SmileIcon when rating is between 3.1 and 4', () => {
    const ratings = getRatings({ rating: 3.1 });

    expect(ratings.exists('SmileIcon')).toBeTruthy();
  });

  it('renders a HappyIcon when rating is between 4.1 and 5', () => {
    const ratings = getRatings({ rating: 4.1 });

    expect(ratings.exists('HappyIcon')).toBeTruthy();
  });

  it('renders a given children component', () => {
    const ratings = getRatings({ rating: 4.1 }, <span id="children-id" />);

    expect(ratings.exists('span#children-id')).toBeTruthy();
  });
});
