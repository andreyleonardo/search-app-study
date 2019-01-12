import React from 'react';
import PropTypes from 'prop-types';
import he from 'he';
import classnames from 'classnames';

const ResultDetailsTour = ({
  title, rating, currency, price, isSpecialOffer, expand
}) => (
  <div aria-expanded={expand} className={classnames('search_result__info', { 'search_result__info--expanded': expand })}>
    <p>{he.decode(title)}</p>
    <p>{rating}</p>
    <p>{currency + price}</p>
    <p>{isSpecialOffer && 'Special Offer'}</p>
  </div>
);

ResultDetailsTour.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.string,
  currency: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  isSpecialOffer: PropTypes.bool,
  expand: PropTypes.bool
};

ResultDetailsTour.defaultProps = {
  rating: '0',
  isSpecialOffer: false,
  expand: false
};

export default ResultDetailsTour;
