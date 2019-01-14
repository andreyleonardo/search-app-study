import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LanguageOptions from './language-options/LanguageOptions';

import './LanguageSelector.scss';

class LanguageSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayOptions: false
    };

    this.onDisplayChange = this.onDisplayChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  onDisplayChange() {
    this.setState(state => ({ displayOptions: !state.displayOptions }));
  }

  handleOnClick(language) {
    const { onClick, selectedLanguage } = this.props;
    this.onDisplayChange();
    if (language !== selectedLanguage) {
      onClick(language);
    }
  }

  render() {
    const { selectedLanguage } = this.props;
    const { displayOptions } = this.state;

    return (
      <div className="language_selector">
        <div className="language_selector__button">
          { !displayOptions ? (
            <button id="language-selector-id" type="button" onClick={this.onDisplayChange}>{ selectedLanguage }</button>
          ) : (
            <LanguageOptions onClick={this.handleOnClick} />
          )}
        </div>
      </div>
    );
  }
}

LanguageSelector.propTypes = {
  onClick: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.string.isRequired
};

export default LanguageSelector;
