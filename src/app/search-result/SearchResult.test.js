import React from 'react';
import SearchResult from './SearchResult';

describe('Search Result', () => {
  let searchResult;
  beforeEach(() => {
    const props = {
      result: {
        title: 'My Title',
        currency: '$',
        price: '30',
        rating: '0'
      }
    };
    searchResult = shallow(<SearchResult {...props} />);
  });
  it('renders without crashing', () => {
    expect(searchResult).toMatchSnapshot();
  });
});
