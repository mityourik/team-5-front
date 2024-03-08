import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './DropdownButtonStatus.scss';

function DropdownButtonStatus({
  onSelect, id, selectedValue, className,
}) {
  const options = ['Выполнено', 'Не выполнено'];
  const [selectedOption, setSelectedOption] = useState(selectedValue);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSelectedOption(selectedValue);
  }, [selectedValue]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  const handleKeyDown = (event, option) => {
    if (event.key === 'Enter') {
      handleSelect(option);
    }
  };

  return (
    <div
      className={`dropdown-btn-status ${className}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <input
        placeholder={selectedOption || 'Выберите статус'}
        type="text"
        className={`dropdown-btn-status__input ${selectedOption ? 'dropdown__input_active' : ''}`}
        value={selectedOption || ''}
        readOnly
      />
      {isOpen && (
        <ul className="dropdown-btn-status__list">
          {options.map((option) => (
            <li
              key={option}
              className="dropdown-btn-status__item"
            >
              <button
                id={`${id}-${option}`}
                type="button"
                onClick={() => handleSelect(option)}
                onKeyDown={(event) => handleKeyDown(event, option)}
                className={`dropdown-btn-status__button ${selectedOption === option ? 'dropdown-btn-status__button_selected' : ''}`}
                tabIndex={0}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

DropdownButtonStatus.defaultProps = {
  selectedValue: '',
  className: '',
};

DropdownButtonStatus.propTypes = {
  id: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedValue: PropTypes.string,
  className: PropTypes.string,
};

export default DropdownButtonStatus;
