import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import SearchBar from './search-bar/SearchBar';
import SearchResult from './search-result/SearchResult';
import stubData from '../data.json';
import backgroundImage from '../stylesheets/img/app_background_image.jpeg';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: []
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange({ target: { value } }) {
    this.setState((state) => {
      const newState = {
        ...state,
        query: value
      };

      if (this.isQueryValid(newState.query)) {
        const results = this.findTours(newState.query);

        return {
          ...newState,
          results
        };
      }

      return {
        ...newState,
        results: []
      };
    });
  }

  isQueryValid(query) {
    return query.length > 2;
  }

  findTours(query) {
    const { data } = this.props;
    return data.tours.filter(tour => tour.title.toLowerCase().match(query.toLowerCase()));
  }

  render() {
    const { results, query } = this.state;

    return (
      <div className="app">
        <header className="app__header">
          <h1>Experience Finder</h1>
        </header>
        <main className="app__main row center-xs">
          <section className="app__background">
            <img className="app__background_image" src={backgroundImage} alt="main section" />
          </section>
          <section className="app__search_bar col-xs-12">
            <div className="row center-xs">
              <div className="col-xs-12 col-sm-7">
                <SearchBar onChange={this.onChange} />
              </div>
            </div>
          </section>
          {this.isQueryValid(query) && isEmpty(results) ? (
            <section className="app__no_results col-xs-12">
              <p>No results found! =(</p>
            </section>
          ) : (
            <section className="app__search_results col-xs-12">
              { results.map((result, index) => (
                <SearchResult key={result.title} result={result} tabIndex={index + 1} />
              )) }
            </section>
          )}
        </main>
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.shape({
    tours: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string
      })
    )
  })
};

App.defaultProps = {
  data: stubData
};

export default App;
