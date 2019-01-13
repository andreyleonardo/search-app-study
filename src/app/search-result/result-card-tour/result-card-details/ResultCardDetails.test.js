import React from 'react';
import ResultCardDetails from './ResultCardDetails';

describe('Result Card Details', () => {
  let props;
  let resultCardDetails;

  beforeEach(() => {
    props = {
      currency: '$',
      price: '30',
      rating: 4.8
    };
    resultCardDetails = shallow(<ResultCardDetails {...props} />);
  });

  it('renders without crash', () => {
    expect(resultCardDetails).toMatchSnapshot();
  });

  it('renders Special Offer text when isSpecialOffer is true', () => {
    resultCardDetails.setProps({ isSpecialOffer: true });

    expect(resultCardDetails).toMatchSnapshot();
  });
});
