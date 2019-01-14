import React from 'react';
import NoResults from './NoResults';

describe('No Results', () => {
  it('renders without crash', () => {
    const noResults = shallow(<NoResults />);

    expect(noResults).toMatchSnapshot();
  });
});
