import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useFormikContext } from 'formik';
import { setDropdownValue, setErrorDropdown } from '../services/slices/dropdownSlice';
import './DropdownField.scss';

function DropdownField({
  options, labelText, htmlFor, selectedValue,
}) {
  const { errors, setFieldValue, touched } = useFormikContext();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownError = useSelector((state) => state.dropdown.errorDropdown);
  const errorMessage = useSelector((state) => state.dropdown.errorMessageDropdown);
  const dispatch = useDispatch();

  const handleSelect = (option) => {
    dispatch(setDropdownValue(option));
    setIsOpen(false);
    setFieldValue(htmlFor, option);
    console.log('handleSelect', option);
  };

  const handleValidate = () => {
    if (selectedValue === 'Выберете из списка') {
      dispatch(setErrorDropdown({ errorDropdown: true, errorMessageDropdown: 'Список обязателен для выбора' }));
    } else {
      dispatch(setErrorDropdown({ errorDropdown: false, errorMessageDropdown: '' }));
    }
  };

  return (
    <div className="select">
      <label htmlFor={htmlFor} className="select__label">{labelText}</label>
      <div className="select__wrapper">
        <button
          className={`select__button ${errors[htmlFor] && touched[htmlFor] && 'select__button_error'}`}
          type="button"
          id={htmlFor}
          onClick={() => {
            setIsOpen(!isOpen);
            handleValidate(selectedValue);
          }}
        >
          {selectedValue || 'Выберете из списка'}
        </button>
        <div className="select__error-container">
          {/* <div className={!isOpen && 'select__error-container'}> */}
          {dropdownError && (
          <span className="select__error">
            {errorMessage}
          </span>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="select__menu">
          {options.map((option) => (
            <button
              key={option}
              className="select__option"
              type="button"
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

DropdownField.defaultProps = {
  selectedValue: '',
};

DropdownField.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  labelText: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  selectedValue: PropTypes.string,
};

export default DropdownField;
