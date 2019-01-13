import React from 'react';
import he from 'he';
import PropTypes from 'prop-types';
import Ratings from '../../ratings/Ratings';

import './ResultCardTour.scss';

const ResultCardTour = ({
  title, rating, currency, price, isSpecialOffer, onClick, tabIndex, imgSrc, imgAlt
}) => (
  <div
    id={`result_card_tour-id-${tabIndex}`}
    className="result_card_tour row"
    role="button"
    onKeyPress={onClick}
    onClick={onClick}
    tabIndex={tabIndex}
  >
    <div className="result_card_tour__picture col-xs-12 col-sm-3">
      <img className="result_card_tour__img" src={imgSrc} alt={imgAlt} />
    </div>
    <div className="result_card_tour__details col-xs-12 col-sm">
      <div className="row start-xs">
        <div className="col-xs-12">
          <span>{he.decode(title)}</span>
        </div>
      </div>
      <div className="row between-xs middle-xs">
        <div className="result_card_tour__rating col-xs-4 col-sm">
          <Ratings rating={rating}>
            <span>{rating}</span>
          </Ratings>
        </div>
        <div className="result_card_tour__pricing col-xs col-sm">
          {isSpecialOffer && <span className="result_card_tour__special_offer">Special Offer</span>}
          <span className="result_card_tour__price">{currency + price}</span>
        </div>
      </div>
    </div>
  </div>
);

ResultCardTour.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  currency: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  isSpecialOffer: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  tabIndex: PropTypes.number.isRequired,
  imgAlt: PropTypes.string,
  imgSrc: PropTypes.string
};

ResultCardTour.defaultProps = {
  rating: 0,
  isSpecialOffer: false,
  imgAlt: '',
  imgSrc: ''
};

export default ResultCardTour;
