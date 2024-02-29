import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './DropdownButtonSelect.scss';

function DropdownButtonSelect({
  options, onSelect, id, selectedValue, placeholder,
}) {
  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const wrapperRef = useRef(null);

  useEffect(() => {
    setInputValue(selectedValue);
  }, [selectedValue]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setInputValue(option);
    onSelect(option);
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
    <div className="dropdown" ref={wrapperRef}>
      <input
        placeholder={placeholder}
        type="text"
        className={`dropdown__input ${inputValue ? 'dropdown__input_active' : ''}`}
        onClick={toggleDropdown}
        value={inputValue || ''}
        readOnly
      />
      {isOpen && (
        <ul className="dropdown__list">
          {options.map((option) => (
            <li key={option} className="dropdown__item">
              <button
                id={id}
                type="button"
                onClick={() => handleSelect(option)}
                onKeyDown={(event) => handleKeyDown(event, option)}
                className={`dropdown__button ${selectedOption === option ? 'dropdown__button_selected' : ''}`}
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
};

DropdownButtonSelect.propTypes = {
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedValue: PropTypes.string,
};

export default DropdownButtonSelect;
