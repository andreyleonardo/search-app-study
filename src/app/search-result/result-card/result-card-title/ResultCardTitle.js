import React from 'react';
import PropTypes from 'prop-types';
import he from 'he';

const ResultCardTitle = ({ title }) => (
  <section className="row start-xs">
    <div className="col-xs-12">
      <span>{he.decode(title)}</span>
    </div>
  </section>
);

ResultCardTitle.propTypes = {
  title: PropTypes.string
};

ResultCardTitle.defaultProps = {
  title: ''
};

export default ResultCardTitle;
