import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import unchecked from '../../assets/Unchecked.svg';
import checked from '../../assets/Checked.svg';

export default function Checkbox({ isChecked, onChange, label }) {
  const [checkedState, setCheckedState] = useState(isChecked);

  useEffect(() => {
    // Синхронизируем внутреннее состояние с пропсом isChecked, если они не совпадают.
    if (isChecked !== checkedState) {
      setCheckedState(isChecked);
    }
  }, [isChecked, checkedState]);

  const toggleCheckbox = () => {
    onChange(!checkedState); // Используем checkedState здесь
  };

  const onKeyPressed = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault(); // Добавил preventDefault, чтобы избежать действий по умолчанию
      toggleCheckbox();
    }
  };

  return (
    <div
      className="checkbox"
      onClick={toggleCheckbox}
      onKeyDown={onKeyPressed}
      role="checkbox"
      tabIndex="0"
      aria-checked={checkedState} // Используем checkedState для отображения текущего состояния
      aria-label={label || 'Чекбокс'}
    >
      <img
        className="checkbox__icon"
        src={checkedState ? checked : unchecked}
        alt={label || ''}
      />
    </div>
  );
}

Checkbox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
