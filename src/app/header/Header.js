import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import LanguageSelector from './language-selector/LanguageSelector';

import './Header.scss';

const Header = ({ selectedLanguage, onChangeLanguage }) => (
  <header className="header">
    <div className="header__container row middle-xs">
      <div className="header__title col-xs">
        <FormattedMessage id="header.title" />
      </div>
      <nav className="header__nav_bar col-xs">
        <LanguageSelector
          selectedLanguage={selectedLanguage}
          onClick={onChangeLanguage}
        />
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onChangeLanguage: PropTypes.func.isRequired
};

export default Header;
