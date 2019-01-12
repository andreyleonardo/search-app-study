import React from 'react';
import he from 'he';
import PropTypes from 'prop-types';
import './ResultCardTour.scss';

const ResultCardTour = ({
  title, rating, currency, price, isSpecialOffer, onClick, tabIndex
}) => (
  <div
    className="result_card_tour"
    role="button"
    onKeyPress={onClick}
    onClick={onClick}
    tabIndex={tabIndex}
  >
    <p>{he.decode(title)}</p>
    <p>{rating}</p>
    <p>{currency + price}</p>
    <p>{isSpecialOffer && 'Special Offer'}</p>
  </div>
);

ResultCardTour.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.string,
  currency: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  isSpecialOffer: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired
};

ResultCardTour.defaultProps = {
  rating: '0',
  isSpecialOffer: false
};

export default ResultCardTour;
