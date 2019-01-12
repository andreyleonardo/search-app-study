import React from 'react';
import App from './App';

describe('App', () => {
  let app;
  it('renders without crashing', () => {
    app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });

  it('renders no-results when theres no results for a given query', () => {
    app.setState({ query: 'potato', results: [] });

    expect(app.exists('.app__no_results')).toBeTruthy();
  });
});
