import React from 'react';
import PropTypes from 'prop-types';
import he from 'he';
import classnames from 'classnames';

import './ResultDetails.scss';

const ResultDetails = ({
  index, description, expand, imgAlt, imgSrc, title
}) => (
  <div
    id={`result-details-id-${index}`}
    aria-expanded={expand}
    className={classnames('result_details row', { 'result_details--expanded': expand })}
  >
    <picture className="result_details__picture hidden-xs col-sm-12">
      <img className="result_details__img" src={imgSrc} alt={imgAlt} />
    </picture>
    <article className="result_details__description col-xs-12">
      <h1>
        {he.decode(title)}
      </h1>
      <p>{he.decode(description)}</p>
    </article>
  </div>
);

ResultDetails.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  expand: PropTypes.bool,
  imgAlt: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  index: PropTypes.number
};

ResultDetails.defaultProps = {
  expand: false,
  imgAlt: '',
  index: 0
};

export default ResultDetails;
