import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useFormikContext } from 'formik';
import { getAmbassadorData, getIsNewAmbassadorAdding } from '../services/selectors/ambassadorSelector';
import './DropdownField.scss';

function DropdownField({
  options, labelText, htmlFor,
}) {
  const { errors, touched } = useFormikContext();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(''); // Track selected option
  const dropdownError = useSelector((state) => state.dropdown.errorDropdown);
  const errorMessage = useSelector((state) => state.dropdown.errorMessageDropdown);
  const ambassadorData = useSelector(getAmbassadorData);
  // const isAmbassadorDataEditing = useSelector(getIsAmbassadorDataEditing);
  const isNewAmbassadorAdding = useSelector(getIsNewAmbassadorAdding);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isNewAmbassadorAdding) {
      switch (htmlFor) {
        case 'studyProgramm':
          setSelectedOption(ambassadorData.study_programm?.title || 'UI/UX дизайнер');
          break;
        case 'country':
          setSelectedOption(ambassadorData.country || 'Россия');
          break;
        case 'city':
          setSelectedOption(ambassadorData.city || 'Санкт-Петербург');
          break;
        case 'clothingSize':
          setSelectedOption(ambassadorData.shirt_size || 'M');
          break;
        default:
          break;
      }
    }
  }, [ambassadorData.city, ambassadorData.country, ambassadorData.shirt_size,
    ambassadorData.study_programm, dispatch, htmlFor, isNewAmbassadorAdding]);

  const handleSelect = (htmlFor, option) => {
    switch (htmlFor) {
      case 'studyProgramm':
        setSelectedOption(option.title);
        break;
      case 'country':
        setSelectedOption(option);
        break;
      case 'city':
        setSelectedOption(option);
        break;
      case 'clothingSize':
        setSelectedOption(option);
        break;
      default:
        break;
    }
    setIsOpen(false);
    setSelectedOption(option.title || option);
    console.log(selectedOption);
  };

  return (
    <div className="select">
      <label htmlFor={htmlFor} className="select__label">{labelText}</label>
      <div className="select__wrapper">
        <button
          className={`select__button ${errors[htmlFor] && touched[htmlFor] && 'select__button_error'} ${!selectedOption ? 'select__button_empty' : ''}`}
          type="button"
          id={htmlFor}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {selectedOption || 'Выберете из списка'}
        </button>
        <div className="select__error-container">
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
              key={option.title || option}
              className="select__option"
              type="button"
              onClick={() => handleSelect(htmlFor, option)}
            >
              {option.title || option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
function dropdownPropTypes(labelText) {
  if (labelText === 'Программа обучения') {
    return PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }));
  }
  return PropTypes.func;
}

DropdownField.propTypes = {
  options: dropdownPropTypes.isRequired,
  // options: PropTypes.arrayOf(PropTypes.string).isRequired,
  labelText: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

export default DropdownField;
