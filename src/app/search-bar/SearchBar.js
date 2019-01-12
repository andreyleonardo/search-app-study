import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.scss';

const SearchBar = ({ onChange }) => (
  <div className="search_bar col-xs-12 col-sm-6">
    <div>
      <label htmlFor="search-input-id">
        <input
          className="search_bar__input"
          id="search-input-id"
          placeholder="Let's find a great experience"
          onChange={onChange}
        />
      </label>
    </div>
  </div>
);

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default SearchBar;
