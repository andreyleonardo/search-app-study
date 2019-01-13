import React from 'react';
import PropTypes from 'prop-types';
import he from 'he';
import classnames from 'classnames';

import './ResultDetailsTour.scss';

const ResultDetailsTour = ({
  index, description, expand, imgAlt, imgSrc, title
}) => (
  <div
    id={`result-details-tour-id-${index}`}
    aria-expanded={expand}
    className={classnames('result_details_tour row', { 'result_details_tour--expanded': expand })}
  >
    <picture className="result_details_tour__picture hidden-xs col-sm-12">
      <img className="result_details_tour__img" src={imgSrc} alt={imgAlt} />
    </picture>
    <article className="result_details_tour__description col-xs-12">
      <h1>
        {he.decode(title)}
      </h1>
      <p>{he.decode(description)}</p>
    </article>
  </div>
);

ResultDetailsTour.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  expand: PropTypes.bool,
  imgAlt: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  index: PropTypes.number
};

ResultDetailsTour.defaultProps = {
  expand: false,
  imgAlt: '',
  index: 0
};

export default ResultDetailsTour;
