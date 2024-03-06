import { useCallback } from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import './InputContainer.scss';
import InputContainer from './InputContainer';

export default function InputName({ name }) {
  const validateName = useCallback((value) => {
    if (!value) {
      return 'Поле не может быть пустым';
    }
    if (value.length < 1 || value.length > 250) {
      return 'Никнейм должен быть не менее 1 и не более 250 символов';
    }
    // if (!/^[a-zA-Z0-9_]{2,20}$/.test(value)) {
    //   return 'Никнейм может содержать латинские буквы, цифры и символ подчеркивания';
    // }
    return null; // Возвращаем null, если ошибок нет
  }, []);

  return (
    <InputContainer labelText={name === 'name' ? 'ФИО' : 'Ник в Телеграм'} inputId={name}>
      <Field
        id={name}
        type="text"
        name={name}
        className="input"
        validate={validateName}
        maxLength={250}
        placeholder="Введите фамилию, имя и отчество"
      />
    </InputContainer>
  );
}

InputName.propTypes = {
  name: PropTypes.string.isRequired,
};
