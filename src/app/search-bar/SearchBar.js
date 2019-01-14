import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import SearchIcon from './icons/SearchIcon';
import './SearchBar.scss';

function onSubmit(event, callback) {
  event.preventDefault();
  if (callback) {
    callback();
  }
}

const SearchBar = ({ onChange, handleSubmit, name }) => (
  <section className="search_bar col-xs-12">
    <div className="row center-xs">
      <div className="col-xs-12 col-sm-7">
        <form
          id="search-form-id"
          className="search_bar__form"
          name="search_bar_form"
          onSubmit={event => onSubmit(event, handleSubmit)}
        >
          <label htmlFor="search-input-id" className="search_bar__label">
            <FormattedMessage id="search_bar.label" />
            <input
              name={name}
              autoComplete="off"
              className="search_bar__input"
              id="search-input-id"
              onChange={onChange}
            />
            <button type="submit" className="search_bar__button">
              <SearchIcon />
            </button>
          </label>
        </form>
      </div>
    </div>
  </section>
);

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func,
  name: PropTypes.string
};

SearchBar.defaultProps = {
  name: 'search_bar_input',
  handleSubmit: null
};

export default SearchBar;
