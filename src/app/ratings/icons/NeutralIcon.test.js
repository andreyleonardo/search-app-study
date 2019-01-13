import React from 'react';
import NeutralIcon from './NeutralIcon';

describe('Neutral Icon', () => {
  it('renders without crash', () => {
    const neutralIcon = shallow(<NeutralIcon />);
    expect(neutralIcon).toMatchSnapshot();
  });
});
