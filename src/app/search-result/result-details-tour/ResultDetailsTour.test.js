import React from 'react';
import ResultDetailsTour from './ResultDetailsTour';

describe('Result Details Tour', () => {
  let resultCardTour;
  let props;

  beforeEach(() => {
    props = {
      description: 'Tour Title',
      expand: false
    };

    resultCardTour = shallow(<ResultDetailsTour {...props} />);
  });

  it('renders without crashing', () => {
    expect(resultCardTour).toMatchSnapshot();
  });

  it('sets expanded class when expand is true', () => {
    resultCardTour.setProps({ expand: true });

    expect(resultCardTour.exists('.result_details_tour--expanded')).toBeTruthy();
  });
});
