import React from 'react';
import HappyIcon from './HappyIcon';

describe('Happy Icon', () => {
  it('renders without crash', () => {
    const happyIcon = shallow(<HappyIcon />);
    expect(happyIcon).toMatchSnapshot();
  });
});
