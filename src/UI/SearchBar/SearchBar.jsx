import { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.scss';

function SearchBar({ placeholder, onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearchChange(e.target.value); // Вызываем onSearchChange при каждом изменении
  };

  return (
    <form onChange={handleSearchChange} className="search-bar">
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
  onSearchChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {
  placeholder: 'Поиск Амбассадора',
};

export default SearchBar;
