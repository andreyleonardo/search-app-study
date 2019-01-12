import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './search-bar/SearchBar';
import SearchResult from './search-result/SearchResult';
import stubData from '../data.json';
import './App.scss';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange({ target: { value } }) {
    this.setState((state) => {
      const results = this.findTours(value);
      return {
        ...state,
        results
      };
    });
  }

  findTours(query) {
    const { data } = this.props;
    return data.tours.filter(tour => tour.title.toLowerCase().match(query.toLowerCase()));
  }

  render() {
    const { results } = this.state;
    return (
      <div className="app">
        <header className="app__header">
          <h1>Experience Finder</h1>
        </header>
        <main className="app__main row center-xs">
          <SearchBar onChange={this.onChange} />
          <div className="col-xs-12">
            { results.map(result => (
              <SearchResult key={result.title} result={result} />
            )) }
          </div>
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
