import React from 'react';
import PropTypes from 'prop-types';
import he from 'he';
import classnames from 'classnames';

import './ResultDetailsTour.scss';

const ResultDetailsTour = ({
  description, expand
}) => (
  <div
    id="result_details_tour-id"
    aria-expanded={expand}
    className={classnames('result_details_tour', { 'result_details_tour--expanded': expand })}
  >
    <p>{he.decode(description)}</p>
  </div>
);

ResultDetailsTour.propTypes = {
  description: PropTypes.string.isRequired,
  expand: PropTypes.bool
};

ResultDetailsTour.defaultProps = {
  expand: false
};

export default ResultDetailsTour;
