import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ResultCardTour from './result-card-tour/ResultCardTour';
import ResultDetailsTour from './result-details-tour/ResultDetailsTour';
import pictures from '../../pictures';

import './SearchResult.scss';

const descriptionStub = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

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
      tabIndex,
      index
    } = this.props;
    const { showDetails } = this.state;

    return (
      <div id={`search_result-id-${tabIndex}`} className="search_result row center-xs">
        <div className="col-xs-12 col-sm-7">
          <ResultCardTour
            title={title}
            rating={parseFloat(rating)}
            currency={currency}
            price={price}
            isSpecialOffer={isSpecialOffer}
            onClick={this.showDetails}
            tabIndex={tabIndex}
            imgSrc={pictures[index].img}
            imgAlt={pictures[index].credits}
          />
        </div>
        <div className="col-xs-12 col-sm-7">
          <ResultDetailsTour
            description={descriptionStub}
            expand={showDetails}
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
  tabIndex: PropTypes.number,
  index: PropTypes.number
};

SearchResult.defaultProps = {
  tabIndex: 0,
  index: 0
};

export default SearchResult;
