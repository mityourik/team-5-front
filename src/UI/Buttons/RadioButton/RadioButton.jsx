// import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
// import InputContainer from '../../../Inputs/InputContainer';
import './RadioButton.scss';

export default function RadioButton({
  labelText, inputId, values, initialValue, handleChange,
}) {
  const handleRadioChange = (e) => {
    const { value } = e.target;
    handleChange(value);
  };

  return (
    <div className="radio-buttons__containter">
      <label htmlFor={inputId} className="radio-buttons__label">
        {labelText}
      </label>
      <div className="radio-buttons__wrapper">
        {values.map((value, index) => (
        // eslint-disable-next-line react/no-array-index-key
          <div className="radio-button__container" key={`${inputId}_${index}`}>
            <Field
              id={`${inputId}_${index}`}
              type="radio"
              name="gender"
              value={value}
              checked={initialValue === value || index === 0}
              onChange={handleRadioChange}
              className="radio-button"
            />
            <label htmlFor={`${inputId}_${index}`} className="radio-button__label">
              {value}
            </label>
            {/* <span className="radio-button__error"></span> */}
          </div>
        ))}
      </div>
    </div>
  );
}

RadioButton.propTypes = {
  labelText: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  initialValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
