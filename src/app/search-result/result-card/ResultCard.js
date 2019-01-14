import React from 'react';
import PropTypes from 'prop-types';
import ResultCardTitle from './result-card-title/ResultCardTitle';
import ResultCardDetails from './result-card-details/ResultCardDetails';

import './ResultCard.scss';

const ResultCard = ({
  index, title, rating, currency, price, isSpecialOffer, onClick, tabIndex, imgSrc, imgAlt
}) => (
  <div
    id={`result-card-id-${index}`}
    className="result_card row"
    role="button"
    onKeyPress={onClick}
    onClick={onClick}
    tabIndex={tabIndex}
  >
    <picture className="result_card__picture col-xs-12 col-sm-3">
      <img className="result_card__img" src={imgSrc} alt={imgAlt} />
    </picture>
    <div className="result_card__details col-xs-12 col-sm">
      <ResultCardTitle title={title} />
      <ResultCardDetails
        rating={rating}
        currency={currency}
        price={price}
        isSpecialOffer={isSpecialOffer}
      />
    </div>
  </div>
);

ResultCard.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  currency: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  isSpecialOffer: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired,
  index: PropTypes.number,
  imgAlt: PropTypes.string,
  imgSrc: PropTypes.string
};

ResultCard.defaultProps = {
  rating: 0,
  isSpecialOffer: false,
  imgAlt: '',
  imgSrc: '',
  index: 0
};

export default ResultCard;
