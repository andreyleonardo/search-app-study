import React, { Component } from 'react';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler';
import ResultCard from './result-card/ResultCard';
import ResultDetails from './result-details/ResultDetails';
import pictures from '../../pictures';

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
        description
      },
      tabIndex,
      index
    } = this.props;
    const { showDetails } = this.state;

    return (
      <OutsideClickHandler onOutsideClick={this.onOutsideClick}>
        <div id={`search-result-id-${index}`} className="search_result row center-xs">
          <section className="col-xs-12 col-sm-7">
            <ResultCard
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
            <ResultDetails
              index={index}
              title={title}
              description={description}
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
    isSpecialOffer: PropTypes.bool,
    description: PropTypes.string
  }).isRequired,
  tabIndex: PropTypes.number,
  index: PropTypes.number
};

SearchResult.defaultProps = {
  tabIndex: 0,
  index: 0
};

export default SearchResult;
