import React from 'react';
import SadIcon from './SadIcon';

describe('Sad Icon', () => {
  it('renders without crash', () => {
    const sadIcon = shallow(<SadIcon />);
    expect(sadIcon).toMatchSnapshot();
  });
});
