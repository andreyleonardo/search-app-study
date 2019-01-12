import React from 'react';
import ResultDetailsTour from './ResultDetailsTour';

describe('Result Details Tour', () => {
  let resultCardTour;
  let props;

  beforeEach(() => {
    props = {
      title: 'Tour Title',
      currency: '$',
      price: '30',
      rating: '4.8',
      onClick: jest.fn(),
      tabIndex: 1
    };

    resultCardTour = shallow(<ResultDetailsTour {...props} />);
  });

  it('renders without crashing', () => {
    expect(resultCardTour).toMatchSnapshot();
  });

  it('renders Special Offer text when isSpecialOffer is true', () => {
    props = {
      ...props,
      isSpecialOffer: true
    };
    resultCardTour = shallow(<ResultDetailsTour {...props} />);

    expect(resultCardTour).toMatchSnapshot();
  });
});
