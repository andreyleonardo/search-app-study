import React from 'react';
import ResultCardTitle from './ResultCardTitle';

describe('Result Card Details', () => {
  let resultCardTitle;

  beforeEach(() => {
    resultCardTitle = shallow(<ResultCardTitle title="My Title" />);
  });

  it('renders without crash', () => {
    expect(resultCardTitle).toMatchSnapshot();
  });
});
