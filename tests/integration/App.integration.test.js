import React from 'react';
import App from '../../src/app/App';

describe('App Integration', () => {
  it('updates results state when a search is made', () => {
    const app = mount(<App />);

    app.debug();
  });
});
