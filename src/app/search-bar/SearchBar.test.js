import React from 'react';
import SearchBar from './SearchBar';

describe('Search Bar', () => {
  let props;
  let searchBar;
  beforeEach(() => {
    props = {
      onChange: jest.fn(),
      handleSubmit: jest.fn()
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

  it('calls handleSubmit function when present and submits form', () => {
    searchBar.find('form#search-form-id').simulate('submit', { preventDefault: jest.fn() });

    expect(props.handleSubmit).toHaveBeenCalledTimes(1);
  });

  it('does not calls handleSubmit function when is not present and submits form', () => {
    searchBar.setProps({ handleSubmit: null });
    searchBar.find('form#search-form-id').simulate('submit', { preventDefault: jest.fn() });

    expect(props.handleSubmit).toHaveBeenCalledTimes(0);
  });
});
