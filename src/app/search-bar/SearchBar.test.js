import React from 'react';
import SearchBar from './SearchBar';

describe('Search Bar', () => {
  let props;
  let searchBar;
  beforeEach(() => {
    props = {
      onChange: jest.fn()
    };
    searchBar = shallow(<SearchBar {...props} />);
  });

  it('renders without crashing', () => {
    expect(searchBar).toMatchSnapshot();
  });

  it('calls onChange function when typing', () => {
    searchBar.find('input#search-input-id').simulate('change');

    expect(props.onChange).toHaveBeenCalledTimes(1);
  });
});
