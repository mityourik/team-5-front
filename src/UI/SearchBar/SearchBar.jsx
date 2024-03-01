import { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.scss';

function SearchBar({ placeholder, onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearchSubmit} className="search-bar">
      <div className="search-bar__img" aria-label="Поиск" />
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
    </form>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  placeholder: 'Поиск Амбассадора',
};

export default SearchBar;
