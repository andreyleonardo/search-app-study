import React from 'react';
import ResultCard from './ResultCard';

describe('Result Card', () => {
  let resultCard;
  let props;

  beforeEach(() => {
    props = {
      title: 'Title',
      currency: '$',
      price: '30',
      rating: 4.8,
      onClick: jest.fn(),
      tabIndex: 1
    };

    resultCard = shallow(<ResultCard {...props} />);
  });

  it('renders without crashing', () => {
    expect(resultCard).toMatchSnapshot();
  });

  it('calls onClick when component is clicked', () => {
    resultCard.simulate('click');

    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
