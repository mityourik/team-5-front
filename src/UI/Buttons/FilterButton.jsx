import PropTypes from 'prop-types';
import './FilterButton.scss';

function FilterButton({
  onClick,
  text,
  children,
}) {
  return (
    <button
      className="filter-button"
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
};

FilterButton.defaultProps = {
  text: 'Фильтры',
  children: null,
};

export default FilterButton;
