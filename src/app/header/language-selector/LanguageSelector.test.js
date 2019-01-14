import React from 'react';
import LanguageSelector from './LanguageSelector';

describe('Language Selector', () => {
  let languageSelector;
  let props;

  beforeEach(() => {
    props = {
      onClick: jest.fn(),
      selectedLanguage: 'pt-BR'
    };
    languageSelector = shallow(<LanguageSelector {...props} />);
  });

  it('renders without break', () => {
    expect(languageSelector).toMatchSnapshot();
  });

  it('displays language options and hides language selector when it is clicked', () => {
    languageSelector.find('#language-selector-id').simulate('click');

    expect(languageSelector.exists('#language-selector-id')).toBeFalsy();
    expect(languageSelector.exists('LanguageOptions')).toBeTruthy();
  });

  it('calls onClick when a language is different from selectedLanguage', () => {
    languageSelector.setState({ displayOptions: true });

    languageSelector.instance().handleOnClick('en-US');

    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it('does not calls onClick when a language is equal to selectedLanguage', () => {
    languageSelector.setState({ displayOptions: true });

    languageSelector.instance().handleOnClick('pt-BR');

    expect(props.onClick).not.toHaveBeenCalled();
  });

  it('closes language options and shows language selector button when a language is selected', () => {
    languageSelector.setState({ displayOptions: true });

    languageSelector.instance().handleOnClick('en-US');

    expect(languageSelector.exists('#language-selector-id')).toBeTruthy();
    expect(languageSelector.exists('LanguageOptions')).toBeFalsy();
  });

  it('hides language options when clicked outside', () => {
    languageSelector.setState({ displayOptions: true });
    languageSelector.update();

    expect(languageSelector.exists('LanguageOptions')).toBeTruthy();

    languageSelector.find('OutsideClickHandler').props().onOutsideClick();
    languageSelector.update();

    expect(languageSelector.exists('LanguageOptions')).toBeFalsy();
  });
});
