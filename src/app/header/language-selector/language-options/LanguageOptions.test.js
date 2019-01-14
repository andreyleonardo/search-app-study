import React from 'react';
import LanguageOptions from './LanguageOptions';

describe('Language Options', () => {
  let languageOptions;
  let props;

  beforeEach(() => {
    props = {
      onClick: jest.fn()
    };
    languageOptions = shallow(<LanguageOptions {...props} />);
  });

  it('renders without crash', () => {
    expect(languageOptions).toMatchSnapshot();
  });

  it('calls onClick when an option is clicked', () => {
    languageOptions.find('#en').simulate('click');

    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
