import PropTypes from 'prop-types';
import './PageButton.scss';

function PageButton({
  label, isArrowLeft, isArrowRight, isActive,
}) {
  return (
    <button
      type="button"
      className={`page-button ${isActive ? 'page-button_active' : ''} 
        ${isArrowLeft ? 'page-button_left' : ''}
        ${isArrowRight ? 'page-button_right' : ''}
      `}
    >
      {label}
    </button>
  );
}

PageButton.propTypes = {
  label: PropTypes.string.isRequired, // assuming label is a required string
  isArrowLeft: PropTypes.bool, // assuming isArrow is optional boolean
  isArrowRight: PropTypes.bool, // assuming isArrow is optional boolean
  isActive: PropTypes.bool, // assuming isActive is optional boolean
};

// Defining default values for optional props
PageButton.defaultProps = {
  isArrowLeft: false, // Assuming false as the default value for isArrow
  isArrowRight: false, // Assuming false as the default value for isArrow
  isActive: false, // Assuming false as the default value for isActive
};
export default PageButton;
