import { useCallback, useEffect } from 'react';
import { Field, useFormikContext } from 'formik';
import './InputContainer.scss';
import InputContainer from './InputContainer';

export default function InputEducation() {
  const { values, setFieldValue } = useFormikContext();

  // не даём пользователю нажать пробел в начале и конце строки
  useEffect(() => {
    setFieldValue('education', values.education.trim());
  }, [values.education, setFieldValue]);

  const validateEducation = useCallback((value) => {
    if (!value) {
      return 'Поле не может быть пустым';
    }
    if (value.length < 1 || value.length > 250) {
      return 'Должно быть не менее 1 и не более 250 символов';
    }
    // if (!/^[a-zA-Z0-9_]{2,20}$/.test(value)) {
    //   return 'Никнейм может содержать латинские буквы, цифры и символ подчеркивания';
    // }
    return null; // Возвращаем null, если ошибок нет
  }, []);

  return (
    <InputContainer labelText="Программа обучения" inputId="education">
      <Field
        id="education"
        type="text"
        name="education"
        className="input"
        validate={validateEducation}
        maxLength={250}
      />
    </InputContainer>
  );
}
