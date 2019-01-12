import React from 'react';
import ResultCardTour from './ResultCardTour';

describe('Result Card Tour', () => {
  let resultCardTour;

  beforeEach(() => {
    const props = {
      title: 'Tour Title',
      currency: '$',
      price: '30',
      rating: '4.8'
    };

    resultCardTour = shallow(<ResultCardTour {...props} />);
  });

  it('renders without crashing', () => {
    expect(resultCardTour).toMatchSnapshot();
  });
});
