import { useCallback, useEffect } from 'react';
import { Field, useFormikContext } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAmbassadorInfo } from '../services/thunks/ambassadorThunk';
import './InputContainer.scss';
import InputContainer from './InputContainer';

export default function InputEmail() {
  // const { errors } = useFormikContext();

  const dispatch = useDispatch();

  // const email = useSelector((state) => state.ambassador.ambassadorData.email);

  // const { values, setFieldValue } = useFormikContext();

  useEffect(() => {
    dispatch(fetchAmbassadorInfo());
  }, [dispatch]);
  // useEffect(() => {
  //   setFieldValue('email', values.email);
  // }, [values.email, setFieldValue]);

  const validateEmail = useCallback((value) => {
    if (!value) {
      return 'Поле не может быть пустым';
    }
    // if (value.length < 6) {
    //   return 'Почта должна содержать не менее 6 символов';
    // }
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
