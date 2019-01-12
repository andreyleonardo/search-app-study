import React from 'react';
import App from '../../src/app/App';
import dataStub from '../../src/data.json';

describe('App Integration', () => {
  let app;
  beforeEach(() => {
    app = mount(<App />);
  });
  it('updates results state when a search is made', () => {
    const query = dataStub.tours[0].title;

    expect(app.state().results).toHaveLength(0);

    app.find('input#search-input-id').simulate('change', { target: { value: query } });

    expect(app.state().results).toHaveLength(1);
  });

  it('renders SearchResults as the same quantity of results found', () => {
    const query = dataStub.tours[0].title;

    expect(app.state().results).toHaveLength(0);
    expect(app.find('SearchResult')).toHaveLength(0);

    app.find('input#search-input-id').simulate('change', { target: { value: query } });

    const expectedLength = 1;

    expect(app.find('SearchResult').length).toBeGreaterThanOrEqual(expectedLength);
  });

  it('does not renders SearchResults when query length is less or equal 2', () => {
    const query = 'be';

    app.find('input#search-input-id').simulate('change', { target: { value: query } });

    expect(app.find('SearchResult')).toHaveLength(0);
  });
});
