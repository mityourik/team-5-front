import Checkbox from '../../UI/Checkbox/Checkbox';

export default function TableCheckbox({ count }) {
  return (
    <div className='table-checkbox'>
      <p className='table-checkbox__text'>{count}</p>
      <div className='table-checkbox__container'>
        <Checkbox />
      </div>
    </div>
  );
}
