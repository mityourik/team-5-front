import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import unchecked from '../../assets/Unchecked.svg';
import checked from '../../assets/Checked.svg';

export default function Checkbox({ isChecked, onChange, label }) {
  const [checkedState, setCheckedState] = useState(isChecked);

  useEffect(() => {
    if (isChecked !== checkedState) {
      setCheckedState(isChecked);
    }
  }, [isChecked, checkedState]);

  const toggleCheckbox = () => {
    onChange(!checkedState);
  };

  const onKeyPressed = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
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
      aria-checked={checkedState}
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
