import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './DropdownButtonSelect.scss';

function DropdownButtonSelect({
  options, onSelect, id, selectedValue, placeholder,
}) {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(selectedValue);
  }, [selectedValue]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setInputValue(option);
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
      className="dropdown-btn-select"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <input
        placeholder={placeholder}
        type="text"
        className={`dropdown-btn-select__input ${inputValue ? 'dropdown__input_active' : ''}`}
        value={inputValue || ''}
        readOnly
      />
      {isOpen && (
        <ul className="dropdown-btn-select__list">
          {options.map((option) => (
            <li
              key={option}
              className="dropdown-btn-select__item"
            >
              <button
                id={`${id}-${option}`}
                type="button"
                onClick={() => handleSelect(option)}
                onKeyDown={(event) => handleKeyDown(event, option)}
                className={`dropdown-btn-select__button ${selectedOption === option ? 'dropdown-btn-select__button_selected' : ''}`}
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

DropdownButtonSelect.defaultProps = {
  selectedValue: '',
  placeholder: 'Выбрать',
};

DropdownButtonSelect.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedValue: PropTypes.string,
  placeholder: PropTypes.string,
};

export default DropdownButtonSelect;
