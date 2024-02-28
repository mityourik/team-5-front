import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './DropdownButton1.scss';
import PropTypes from 'prop-types';

function DropdownButton({ buttonLabel, menuOptions, btnClassName }) {
  const [isActive, setIsActive] = useState(false);

  const handleOptionClick = (action) => {
    action();
    setIsActive(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setIsActive(!isActive);
    }
  };

  const handleOptionKeyDown = (action, event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleOptionClick(action);
    }
  };

  const location = useLocation();

  return (
    <div className="dropdown">
      <button
        onClick={() => setIsActive(!isActive)}
        onKeyDown={handleKeyDown}
        className={`dropdown-btn ${btnClassName}`}
        type="button"
        aria-haspopup="true"
        aria-expanded={isActive}
      >
        {buttonLabel}
        {location.pathname !== '/ambassador-page' && <span className="caret" />}
      </button>
      {isActive && (
        <div className="dropdown-content">
          {menuOptions.map((option) => (
            <div
              key={option.label}
              className="dropdown-item"
              onClick={() => handleOptionClick(option.action)}
              onKeyDown={(event) => handleOptionKeyDown(option.action, event)}
              role="menuitem"
              tabIndex="0"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

DropdownButton.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  menuOptions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired,
  })).isRequired,
  btnClassName: PropTypes.string.isRequired,
};

export default DropdownButton;
