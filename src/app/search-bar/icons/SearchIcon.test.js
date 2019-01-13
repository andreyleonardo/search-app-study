import React from 'react';
import SearchIcon from './SearchIcon';

describe('Search Icon', () => {
  it('renders without crash', () => {
    const searchIcon = shallow(<SearchIcon />);
    expect(searchIcon).toMatchSnapshot();
  });
});
