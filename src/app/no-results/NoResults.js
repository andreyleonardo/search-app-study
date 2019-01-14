import React from 'react';
import { FormattedMessage } from 'react-intl';

const NoResults = () => (
  <section className="app__no_results col-xs-12">
    <p><FormattedMessage id="no_results.message" /></p>
  </section>
);

export default NoResults;
