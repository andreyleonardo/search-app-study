import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from './icons/SearchIcon';
import './SearchBar.scss';

function onSubmit(event, callback) {
  event.preventDefault();
  if (callback) {
    callback();
  }
}

const SearchBar = ({ onChange, handleSubmit, name }) => (
  <form
    id="search-form-id"
    className="search_bar"
    name="search_bar_form"
    onSubmit={event => onSubmit(event, handleSubmit)}
  >
    <label htmlFor="search-input-id" className="search_bar__label">
      {"Let's find a great experience"}
    </label>
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
  </form>
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
