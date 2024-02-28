import TableCheckbox from '../TableCheckbox/TableCheckbox';
import TableHeaders from '../TableHeaders/TableHeaders';
import TableRow from '../TableRow/TableRow';
import settingsIcon from '../../assets/settings.svg';

export default function Table({ useCheckbox }) {
  return (
    <section className='table'>
      <div className='table__body'>
        <div className='table__header'>
          <div className='table__checkbox'>
            {useCheckbox ? <TableCheckbox count='#' /> : ''}
          </div>
          <TableHeaders />
          <div className='table__settings-container'>
            <img
              className='table__settings-icon'
              src={settingsIcon}
              alt='Иконка шестеренки'
            />
          </div>
        </div>
        <div className='table__row-container'>
          <TableRow useCheckbox={true} />
          <TableRow useCheckbox={true} />
        </div>
      </div>
    </section>
  );
}
