import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResultCardTour from './result-card-tour/ResultCardTour';
import ResultDetailsTour from './result-details-tour/ResultDetailsTour';
import './SearchResult.scss';

class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false
    };
    this.showDetails = this.showDetails.bind(this);
  }

  showDetails() {
    this.setState(state => ({ showDetails: !state.showDetails }));
  }

  render() {
    const {
      result: {
        title,
        rating,
        currency,
        price,
        isSpecialOffer,
      },
      tabIndex
    } = this.props;
    const { showDetails } = this.state;

    return (
      <div className="row center-xs">
        <div className="col-xs-12 col-sm-7">
          <ResultCardTour
            title={title}
            rating={rating}
            currency={currency}
            price={price}
            isSpecialOffer={isSpecialOffer}
            onClick={this.showDetails}
            tabIndex={tabIndex}
          />
        </div>
        <div className="col-xs-12 col-sm-7">
          <ResultDetailsTour
            title={title}
            rating={rating}
            currency={currency}
            price={price}
            isSpecialOffer={isSpecialOffer}
            expand={showDetails}
            tabIndex={tabIndex}
          />
        </div>
      </div>
    );
  }
}


SearchResult.propTypes = {
  result: PropTypes.shape({
    title: PropTypes.string.isRequired,
    rating: PropTypes.string,
    currency: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    isSpecialOffer: PropTypes.bool
  }).isRequired,
  tabIndex: PropTypes.number
};

SearchResult.defaultProps = {
  tabIndex: 0
};

export default SearchResult;
