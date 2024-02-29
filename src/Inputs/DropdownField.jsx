import { useCallback } from 'react';
// import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';

import './DropdownField.scss';
// import InputContainer from './InputContainer';

export default function DropdownField({
  inputId,
  labelText,
  ddClassName,
  children,
}) {
  const validateEducation = useCallback((value) => {
    if (!value) {
      return 'Список обязателен для выбора';
    }
    return null; // Возвращаем null, если ошибок нет
  }, []);

  return (
    <div className="select__container">
      <label htmlFor={inputId} className="select__label">
        {labelText}
        <Field
          as="select"
          id={inputId}
          type="text"
          name={inputId}
          className={`my-select ${ddClassName}`}
          validate={validateEducation}
        >
          {children}
        </Field>
      </label>
      <div className="input__error-container">
        <ErrorMessage
          className="input__error"
          component="span"
          name={inputId}
        />
      </div>
    </div>
  );
}

DropdownField.propTypes = {
  inputId: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  ddClassName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
