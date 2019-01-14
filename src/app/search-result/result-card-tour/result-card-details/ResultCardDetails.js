import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Ratings from '../../../ratings/Ratings';

import './ResultCardDetails.scss';

const ResultCardDetails = ({
  rating, isSpecialOffer, currency, price
}) => (
  <section className="result_card_details row between-xs middle-xs">
    <div className="result_card_details__rating col-xs-4 col-sm">
      <Ratings rating={rating}>
        <FormattedMessage id="result_card_details.rating" values={{ rating }} />
      </Ratings>
    </div>
    <div className="result_card_details__pricing col-xs col-sm">
      {isSpecialOffer && (
        <span className="result_card_details__special_offer">
          <FormattedMessage id="result_card_details.special_offer" />
        </span>
      )}
      <span className="result_card_details__price">
        <FormattedMessage id="result_card_details.pricing" values={{ currency, price }} />
      </span>
    </div>
  </section>
);

ResultCardDetails.propTypes = {
  rating: PropTypes.number,
  currency: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  isSpecialOffer: PropTypes.bool
};

ResultCardDetails.defaultProps = {
  rating: 0,
  isSpecialOffer: false
};

export default ResultCardDetails;
