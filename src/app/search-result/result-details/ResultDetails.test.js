import React from 'react';
import ResultDetails from './ResultDetails';

describe('Result Details', () => {
  let resultCard;
  let props;

  beforeEach(() => {
    props = {
      title: 'Result title',
      description: 'Result Description',
      expand: false,
      imgSrc: 'image source'
    };

    resultCard = shallow(<ResultDetails {...props} />);
  });

  it('renders without crashing', () => {
    expect(resultCard).toMatchSnapshot();
  });

  it('sets expanded class when expand is true', () => {
    resultCard.setProps({ expand: true });

    expect(resultCard.exists('.result_details--expanded')).toBeTruthy();
  });
});
