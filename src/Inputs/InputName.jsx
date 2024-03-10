import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Field, useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import {
  getIsAmbassadorDataEditing,
  getIsNewAmbassadorAdding,
  getAmbassadorData,
} from '../services/selectors/ambassadorSelector';
import './InputContainer.scss';
import InputContainer from './InputContainer';

export default function InputName({ name }) {
  const { setFieldValue } = useFormikContext();
  const isAmbassadorDataEditing = useSelector(getIsAmbassadorDataEditing);
  const isNewAmbassadorAdding = useSelector(getIsNewAmbassadorAdding);
  const ambassadorData = useSelector(getAmbassadorData);
  const ambassadorName = `${ambassadorData.name || 'Василий'} ${ambassadorData.patronymic || 'Васильевич'} ${ambassadorData.surname || 'Пупкин'}`;

  const validateName = useCallback((value) => {
    if (!value) {
      return 'Поле не может быть пустым';
    }
    if (value.length < 1 || value.length > 250) {
      return 'Никнейм должен быть не менее 1 и не более 250 символов';
    }
    return null; // Возвращаем null, если ошибок нет
  }, []);

  const [fullName, setFullName] = useState('');

  useEffect(() => {
    if (isAmbassadorDataEditing) {
      setFullName(ambassadorName);
    }
  }, [isAmbassadorDataEditing, isNewAmbassadorAdding, ambassadorName]);

  useEffect(() => {
    console.log('fullName:', fullName);
    // разделяем ФИО на части через пробелы
    const [name, ...rest] = fullName.split(' ');
    const patronymic = rest.slice(0, -1).join(' '); // добавляем отчество в середину массива
    const surname = rest[rest.length - 1]; // добавляем серидину в конец

    // собираем ФИО в одну строку
    const combinedValue = `${name} ${patronymic} ${surname}`;

    console.log('combinedValue:', combinedValue);

    setFieldValue('combinedValue', combinedValue);
  }, [fullName, setFieldValue]);

  const handleChange = (e) => {
    setFullName(e.target.value);
  };

  return (
    <InputContainer labelText={name === 'name' ? 'ФИО' : 'Ник в Телеграм'} inputId={name}>
      <Field
        id={name}
        type="text"
        name={name}
        className="input"
        validate={isAmbassadorDataEditing || isNewAmbassadorAdding ? validateName : null}
        maxLength={250}
        placeholder={name === 'name' ? 'Введите фамилию, имя и отчество' : 'Ник в Телеграм'}
        value={
          (() => {
            if (name === 'name' && isAmbassadorDataEditing) {
              return fullName;
            } if (name === 'name' && !isAmbassadorDataEditing) {
              return fullName;
            } if (isNewAmbassadorAdding) {
              return fullName;
            }
            return ambassadorData.telegram_handle || '@telega';
          })()
        }
        onChange={handleChange}
      />
    </InputContainer>
  );
}

InputName.propTypes = {
  name: PropTypes.string.isRequired,
};
