import React from 'react';
import SearchResult from '../../src/app/search-result/SearchResult';

describe('App Integration', () => {
  let searchResult;
  let props;

  beforeEach(() => {
    props = {
      result: {
        title: 'My Title',
        currency: '$',
        price: '30',
        rating: '3.0'
      }
    };
    searchResult = mount(<SearchResult {...props} />);
  });

  it('sets showDetails state as true when ResultCardTour is clicked', () => {
    expect(searchResult.state().showDetails).toBeFalsy();

    searchResult.find('ResultCardTour').simulate('click');

    expect(searchResult.state().showDetails).toBeTruthy();
  });

  it('sets showDetails state as false when ResultCardTour is clicked', () => {
    searchResult.setState({ showDetails: true });

    expect(searchResult.state().showDetails).toBeTruthy();

    searchResult.find('ResultCardTour').simulate('click');

    expect(searchResult.state().showDetails).toBeFalsy();
  });
});
