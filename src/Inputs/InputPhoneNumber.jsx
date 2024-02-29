import { useCallback, useEffect } from 'react';
import { Field, useFormikContext } from 'formik';
import './InputContainer.scss';
import InputContainer from './InputContainer';

export default function InputPhoneNumber() {
  const { values, setFieldValue } = useFormikContext();
  // const { values, setFieldValue, errors } = useFormikContext();

  // не даём пользователю нажать пробел в начале и конце строки
  useEffect(() => {
    setFieldValue('phone', values.phone.trim());
  }, [values.phone, setFieldValue]);

  const validatePosition = useCallback((value) => {
    if (!value) {
      return 'Поле не может быть пустым';
    }
    if (value.length < 1 || value.length > 11) {
      return 'Должно быть не менее 1 и не более 11 символов';
    }
    // сделать регулярку для номера телефона
    return null; // Возвращаем null, если ошибок нет
  }, []);

  return (
    <InputContainer labelText="Телефон" inputId="phone">
      <Field
        id="phone"
        type="tel"
        name="phone"
        className="input"
        validate={validatePosition}
        maxLength={11}
      />
    </InputContainer>
  );
}
