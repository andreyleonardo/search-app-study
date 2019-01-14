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
    searchResult = mountWithIntl(<SearchResult {...props} />);
  });

  it('expands a collpased ResultDetailsTour when ResultCardTour is clicked', () => {
    expect(searchResult.find('ResultDetailsTour').props().expand).toBeFalsy();

    searchResult.find('ResultCardTour').simulate('click');

    expect(searchResult.find('ResultDetailsTour').props().expand).toBeTruthy();
  });

  it('expands a collpased ResultDetailsTour when ResultCardTour is clicked', () => {
    searchResult.setState({ showDetails: true });

    expect(searchResult.find('ResultDetailsTour').props().expand).toBeTruthy();

    searchResult.find('ResultCardTour').simulate('click');

    expect(searchResult.find('ResultDetailsTour').props().expand).toBeFalsy();
  });

  it('collapses an expanded ResultDetailsTour when clicked outside', () => {
    searchResult.setState({ showDetails: true });

    expect(searchResult.find('ResultDetailsTour').props().expand).toBeTruthy();

    searchResult.find('OutsideClickHandler').props().onOutsideClick();
    searchResult.update();

    expect(searchResult.find('ResultDetailsTour').props().expand).toBeFalsy();
  });

  it('does not expands a collpased ResultDetailsTour when clicked outside', () => {
    expect(searchResult.find('ResultDetailsTour').props().expand).toBeFalsy();

    searchResult.find('OutsideClickHandler').props().onOutsideClick();
    searchResult.update();

    expect(searchResult.find('ResultDetailsTour').props().expand).toBeFalsy();
  });
});
