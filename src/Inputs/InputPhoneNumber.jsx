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
    if (value.length < 1 || value.length > 16) {
      return 'Должно быть не менее 1 и не более 11 символов';
    }
    if (!/^(?:\+?7\s?)?(\d{3})\s?(\d{3})\s?(\d{2})\s?(\d{2})$/.test(value)) {
      // +79999999999' или '89999999999'
      return 'Номер телефона должен содержать только цифры';
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
        maxLength={16}
        placeholder="+7"
      />
    </InputContainer>
  );
}
