import { useState } from 'react';
import unchecked from '../../assets/Unchecked.svg';
import checked from '../../assets/Checked.svg';

export default function Checkbox() {
  const [clicked, setClicked] = useState(false);

  const onClicked = () => {
    setClicked(!clicked);
  };
  return (
    <div className='checkbox' onClick={onClicked}>
      <img
        className='checkbox__icon'
        src={clicked ? checked : unchecked}
        alt='Чекбокс'
      />
    </div>
  );
}
