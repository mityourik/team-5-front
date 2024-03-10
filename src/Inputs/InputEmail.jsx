import { useCallback, useEffect } from 'react';
import { Field } from 'formik';
import { useDispatch } from 'react-redux';
import { fetchAmbassadorInfo } from '../services/thunks/ambassadorThunk';
import './InputContainer.scss';
import InputContainer from './InputContainer';

export default function InputEmail() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAmbassadorInfo());
  }, [dispatch]);

  const validateEmail = useCallback((value) => {
    if (!value) {
      return 'Поле не может быть пустым';
    }
    if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value)) {
      return 'Введите корректный email. Пример: user@mail.ru';
    }
    return null;
  }, []);

  return (
    <InputContainer labelText="E-mail" inputId="email">
      <Field
        id="email"
        type="email"
        name="email"
        className="input"
        // className={`input ${errors.email && 'input-error'}`}
        validate={validateEmail}
        maxLength={250}
        placeholder="@mail.ru"
      />
    </InputContainer>
  );
}
