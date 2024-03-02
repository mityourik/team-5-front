import PropTypes from 'prop-types';
import './FilterButton.scss';

function FilterButton({
  onClick,
  text,
  children,
  isFilterOpen,
}) {
  const buttonClasses = `filter-button ${isFilterOpen ? 'filter-button--active' : ''}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      type="button"
    >
      <span className="filter-button__span">
        {text}
      </span>
      {children}
    </button>
  );
}

FilterButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  children: PropTypes.node,
  isFilterOpen: PropTypes.bool,
};

FilterButton.defaultProps = {
  text: 'Фильтры',
  children: null,
  isFilterOpen: false,
};

export default FilterButton;
