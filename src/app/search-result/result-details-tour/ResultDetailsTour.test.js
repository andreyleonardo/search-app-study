import React from 'react';
import ResultDetailsTour from './ResultDetailsTour';

describe('Result Details Tour', () => {
  let resultCardTour;
  let props;

  beforeEach(() => {
    props = {
      title: 'Tour title',
      description: 'Tour Description',
      expand: false,
      imgSrc: 'image source'
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
