import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import i18n from '../../../../i18n';

import './LanguageOptions.scss';

const LanguageOptions = ({ onClick }) => (
  <div className="language_options row center-xs">
    { map(i18n.availableLanguages, (language, displayLanguage) => (
      <div key={language} className="col-xs">
        <button id={displayLanguage} type="button" className="primary" onClick={() => onClick(language)}>{displayLanguage}</button>
      </div>
    ))}
  </div>
);

LanguageOptions.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default LanguageOptions;
