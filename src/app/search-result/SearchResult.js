import React from 'react';
import PropTypes from 'prop-types';
import ResultCardTour from './result-card-tour/ResultCardTour';
import './SearchResult.scss';

const SearchResult = ({
  result: {
    title,
    rating,
    currency,
    price,
    isSpecialOffer
  }
}) => (
  <div className="row center-xs">
    <div className="col-xs-12 col-sm-7">
      <ResultCardTour
        title={title}
        rating={rating}
        currency={currency}
        price={price}
        isSpecialOffer={isSpecialOffer}
      />
    </div>
  </div>
);

SearchResult.propTypes = {
  result: PropTypes.shape({
    title: PropTypes.string.isRequired,
    rating: PropTypes.string,
    currency: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    isSpecialOffer: PropTypes.bool
  }).isRequired,
};

SearchResult.defaultProps = {
};

export default SearchResult;
