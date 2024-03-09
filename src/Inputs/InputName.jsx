import { useCallback } from 'react';

// import { useSelector } from 'react-redux';
import { Field } from 'formik';
import PropTypes from 'prop-types';
// import {
//   getIsAmbassadorDataEditing,
//   getIsNewAmbassadorAdding,
// } from '../services/selectors/ambassadorSelector';
import './InputContainer.scss';
import InputContainer from './InputContainer';

export default function InputName({ name }) {
  // const isAmbassadorDataEditing = useSelector(getIsAmbassadorDataEditing);
  // const isNewAmbassadorAdding = useSelector(getIsNewAmbassadorAdding);

  const validateName = useCallback((value) => {
    if (!value) {
      return 'Поле не может быть пустым';
    }
    if (value.length < 1 || value.length > 250) {
      return 'Никнейм должен быть не менее 1 и не более 250 символов';
    }
    return null; // Возвращаем null, если ошибок нет
  }, []);

  // const [fullName, setFullName] = useState('');

  // useEffect(() => {
  //   console.log('fullName:', fullName);
  //   // Split the full name into parts based on spaces
  //   const parts = fullName.split(' ');

  //   let name = '';
  //   let patronymic = '';
  //   let surname = '';

  //   // Assign values based on the number of parts in the array
  //   if (parts.length >= 1) {
  //     name = parts[0]; // First part is always the name

  //     if (parts.length >= 2) {
  //       patronymic = parts.slice(1, -1).join(' '); // Join parts between first and last as patronymic
  //       surname = parts[parts.length - 1]; // Last part is surname
  //     }
  //   }

  //   // Combine name, patronymic, and surname into one constant
  //   const combinedValue = `${name} ${patronymic} ${surname}`;

  //   console.log('combinedValue:', combinedValue);

  //   // Update the form field value with the combined value
  //   setFieldValue('combinedValue', combinedValue);
  // }, [fullName, setFieldValue]);

  // const handleChange = (e) => {
  //   // Update the state with the new value
  //   setFullName(e.target.value);
  // };

  return (
    <InputContainer labelText={name === 'name' ? 'ФИО' : 'Ник в Телеграм'} inputId={name}>
      <Field
        id={name}
        type="text"
        name={name}
        className="input"
        validate={validateName}
        maxLength={250}
        placeholder={name === 'name' ? 'Введите фамилию, имя и отчество' : 'Ник в Телеграм'}
        // value={isAmbassadorDataEditing || isNewAmbassadorAdding ? fullName : ''}
        // onChange={isAmbassadorDataEditing || isNewAmbassadorAdding ? handleChange : null}
        // validationSchema={validateName}
      />
    </InputContainer>
  );
}

InputName.propTypes = {
  name: PropTypes.string.isRequired,
  // setFieldValue: PropTypes.func.isRequired,
};
