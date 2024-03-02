import { useState } from 'react';
import './DropdownButton.scss';
import PropTypes from 'prop-types';

function DropdownButton({
  buttonLabel, menuOptions,
}) {
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

  return (
    <div className="dropdown-btn">
      <button
        onClick={() => setIsActive(!isActive)}
        onKeyDown={handleKeyDown}
        className={`dropdown-btn__button ${isActive ? 'active' : ''}`}
        type="button"
        aria-haspopup="true"
        aria-expanded={isActive}
      >
        {buttonLabel}
        <span className="dropdown-btn__caret" />
      </button>
      {isActive && (
        <div className="dropdown-btn__content">
          {menuOptions.map((option) => (
            <div
              key={option.label}
              className="dropdown-btn__item"
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
};

export default DropdownButton;
