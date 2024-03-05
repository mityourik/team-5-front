import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './DropdownStatusSelect.scss';

function DropdownStatusSelect({ onSelect }) {
  const options = [
    { label: 'Активный', value: 'Активный', backgroundColor: '#C2E5CE' },
    { label: 'Уточняется', value: 'Уточняется', backgroundColor: '#ACCCFF' },
    { label: 'На паузе', value: 'На паузе', backgroundColor: '#FFE1BD' },
    { label: 'Не амбассадор', value: 'Не амбассадор', backgroundColor: '#DDE0E4' },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(selectedOption.value);
  }, [selectedOption]);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setInputValue(option.value);
    onSelect(option.value);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event, option) => {
    if (event.key === 'Enter') {
      handleSelect(option);
    }
  };

  return (
    <div className="dropdown">
      <input
        // placeholder="Выбрать"
        type="text"
        className={`dropdown__input ${inputValue ? 'dropdown__input_active' : ''}`}
        onClick={toggleDropdown}
        value={inputValue}
        readOnly
        style={{ backgroundColor: selectedOption.backgroundColor }}
      />
      {isOpen && (
        <ul className="dropdown__list">
          {options.map((option) => (
            <li key={option.value} className="dropdown__item">
              <button
                type="button"
                onClick={() => handleSelect(option)}
                onKeyDown={(event) => handleKeyDown(event, option)}
                className={`dropdown__button ${selectedOption === option ? 'dropdown__button_selected' : ''}`}
                tabIndex={0}
              >
                {option.value}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

DropdownStatusSelect.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default DropdownStatusSelect;
