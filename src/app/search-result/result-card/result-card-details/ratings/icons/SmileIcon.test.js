import React from 'react';
import SmileIcon from './SmileIcon';

describe('Smile Icon', () => {
  it('renders without crash', () => {
    const smileIcon = shallow(<SmileIcon />);
    expect(smileIcon).toMatchSnapshot();
  });
});
