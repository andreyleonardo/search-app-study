import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import SearchBar from './search-bar/SearchBar';
import SearchResult from './search-result/SearchResult';
import stubData from '../data.json';
import { backgroundImage } from '../pictures';
import './App.scss';

const MIN_QUERY_SIZE = 3;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: []
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange({ target: { value } }) {
    const query = value;

    this.setState({ query });
    this.handleSubmit({ query });
  }

  handleSubmit(param) {
    const { query } = param || this.state;
    let results = [];

    if (this.isQueryValid(query)) {
      results = this.findTours(query);
    }

    this.setState({ results });
  }

  isQueryValid(query) {
    return query.length >= MIN_QUERY_SIZE;
  }

  findTours(query) {
    const { data: { tours } } = this.props;
    return tours.filter(tour => tour.title.toLowerCase().match(query.toLowerCase()));
  }

  render() {
    const { results, query } = this.state;

    return (
      <div className="app">
        <header className="app__header">
          <h1>Experience Finder</h1>
        </header>
        <main className="app__main row center-xs">
          <picture className="app__background">
            <img className="app__background_image" src={backgroundImage} alt="main section" />
          </picture>
          <section className="app__search_bar col-xs-12">
            <div className="row center-xs">
              <div className="col-xs-12 col-sm-7">
                <SearchBar onChange={this.onChange} handleSubmit={this.handleSubmit} />
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
                <SearchResult
                  key={result.title}
                  result={result}
                  index={index}
                  tabIndex={index + 1}
                />
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
