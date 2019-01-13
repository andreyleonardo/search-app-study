import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler';
import ResultCardTour from './result-card-tour/ResultCardTour';
import ResultDetailsTour from './result-details-tour/ResultDetailsTour';
import pictures from '../../pictures';

const descriptionStub = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

class SearchResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false
    };

    this.showDetails = this.showDetails.bind(this);
    this.onOutsideClick = this.onOutsideClick.bind(this);
  }

  onOutsideClick() {
    const { showDetails } = this.state;
    if (showDetails) {
      this.setState({ showDetails: false });
    }
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
      <OutsideClickHandler onOutsideClick={this.onOutsideClick}>
        <div id={`search-result-id-${index}`} className="search_result row center-xs">
          <section className="col-xs-12 col-sm-7">
            <ResultCardTour
              index={index}
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
          </section>
          <section className="col-xs-12 col-sm-7">
            <ResultDetailsTour
              index={index}
              title={title}
              description={descriptionStub}
              expand={showDetails}
              imgSrc={pictures[index].img}
              imgAlt={pictures[index].credits}
            />
          </section>
        </div>
      </OutsideClickHandler>
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
