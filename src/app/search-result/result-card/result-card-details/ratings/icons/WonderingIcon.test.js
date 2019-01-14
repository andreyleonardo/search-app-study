import React from 'react';
import WonderingIcon from './WonderingIcon';

describe('Wondering Icon', () => {
  it('renders without crash', () => {
    const wonderingIcon = shallow(<WonderingIcon />);
    expect(wonderingIcon).toMatchSnapshot();
  });
});
