import React from 'react';
import SearchResult from '../../src/app/search-result/SearchResult';

describe('Search Integration', () => {
  let searchResult;
  let props;

  beforeEach(() => {
    props = {
      result: {
        title: 'My Title',
        currency: '$',
        price: '30',
        rating: '3.0',
        description: 'description'
      }
    };
    searchResult = mountWithIntl(<SearchResult {...props} />);
  });

  it('expands a collpased ResultDetails when ResultCard is clicked', () => {
    expect(searchResult.find('ResultDetails').props().expand).toBeFalsy();

    searchResult.find('ResultCard').simulate('click');

    expect(searchResult.find('ResultDetails').props().expand).toBeTruthy();
  });

  it('expands a collpased ResultDetails when ResultCard is clicked', () => {
    searchResult.setState({ showDetails: true });

    expect(searchResult.find('ResultDetails').props().expand).toBeTruthy();

    searchResult.find('ResultCard').simulate('click');

    expect(searchResult.find('ResultDetails').props().expand).toBeFalsy();
  });

  it('collapses an expanded ResultDetails when clicked outside', () => {
    searchResult.setState({ showDetails: true });

    expect(searchResult.find('ResultDetails').props().expand).toBeTruthy();

    searchResult.find('OutsideClickHandler').props().onOutsideClick();
    searchResult.update();

    expect(searchResult.find('ResultDetails').props().expand).toBeFalsy();
  });

  it('does not expands a collpased ResultDetails when clicked outside', () => {
    expect(searchResult.find('ResultDetails').props().expand).toBeFalsy();

    searchResult.find('OutsideClickHandler').props().onOutsideClick();
    searchResult.update();

    expect(searchResult.find('ResultDetails').props().expand).toBeFalsy();
  });
});
