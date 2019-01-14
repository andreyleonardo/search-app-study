import React from 'react';
import Header from './Header';

describe('Header', () => {
  it('renders without crash', () => {
    const header = shallow(<Header selectedLanguage="pt" onChangeLanguage={jest.fn()} />);

    expect(header).toMatchSnapshot();
  });
});
