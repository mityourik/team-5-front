import { useCallback, useEffect } from 'react';
import { Field, useFormikContext } from 'formik';
import './InputContainer.scss';
import InputContainer from './InputContainer';

export default function InputWebsite() {
  const { values, setFieldValue } = useFormikContext();
  // const { values, setFieldValue, errors } = useFormikContext();

  // не даём пользователю нажать пробел в начале и конце строки
  useEffect(() => {
    setFieldValue('blog_url', values.blog_url.trim());
  }, [values.blog_url, setFieldValue]);

  const validatePosition = useCallback((value) => {
    if (!value) {
      return 'Поле не может быть пустым';
    }
    if (value.length < 1 || value.length > 200) {
      return 'Должно быть не менее 1 и не более 200 символов';
    }
    // if (!/^[a-zA-Z0-9_]{2,20}$/.test(value)) {
    //   return 'Никнейм может содержать латинские буквы, цифры и символ подчеркивания';
    // }
    return null; // Возвращаем null, если ошибок нет
  }, []);

  return (
    <InputContainer labelText="Ссылка на блог или соцсеть" inputId="blog_url">
      <Field
        id="blog_url"
        type="url"
        name="blog_url"
        className="input"
        validate={validatePosition}
        maxLength={200}
      />
    </InputContainer>
  );
}
