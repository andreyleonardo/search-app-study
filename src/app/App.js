import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';
import { isEmpty } from 'lodash';
import PropTypes from 'prop-types';
import i18n from '../i18n';
import SearchBar from './search-bar/SearchBar';
import SearchResult from './search-result/SearchResult';
import stubData from '../data.json';
import { backgroundImage } from '../pictures';
import Header from './header/Header';
import NoResults from './no-results/NoResults';

import './App.scss';

const MIN_QUERY_SIZE = 3;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: [],
      selectedLanguage: i18n.locale
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeLanguage = this.onChangeLanguage.bind(this);
  }

  onChange({ target: { value } }) {
    const query = value;

    this.setState({ query });
    this.handleSubmit({ query });
  }

  onChangeLanguage(language) {
    this.setState({ selectedLanguage: language });
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
    const {
      data: { tours }
    } = this.props;
    return tours.filter(tour => tour.title.toLowerCase().match(query.toLowerCase()));
  }

  render() {
    const { results, query, selectedLanguage } = this.state;

    return (
      <IntlProvider locale={selectedLanguage} messages={i18n.getMessagesByLocale(selectedLanguage)}>
        <div className="app">
          <Header selectedLanguage={selectedLanguage} onChangeLanguage={this.onChangeLanguage} />
          <main className="app__main row center-xs">
            <picture className="app__background">
              <img className="app__background_image" src={backgroundImage} alt="main section" />
            </picture>
            <SearchBar onChange={this.onChange} handleSubmit={this.handleSubmit} />
            {this.isQueryValid(query) && isEmpty(results) ? (
              <NoResults />
            ) : (
              <section className="app__search_results col-xs-12">
                {results.map((result, index) => (
                  <SearchResult
                    key={result.title}
                    result={result}
                    index={index}
                    tabIndex={index + 1}
                  />
                ))}
              </section>
            )}
          </main>
        </div>
      </IntlProvider>
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
