import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import TableCheckbox from '../TableCheckbox/TableCheckbox';
import TableHeaders from '../TableHeaders/TableHeaders';
import TableRow from '../TableRow/TableRow';
import settingsIcon from '../../assets/settings.svg';
import CheckedStudentsCounter from '../../UI/CheckedStudentsCounter/CheckedStudentsCounter';
import { ambassadorData } from '../../utils/constants';

export default function Table({ useCheckbox, count = 0, allStudents = 150 }) {
  const location = useLocation();

  return (
    <section className="table">
      <div className="table__body">
        {location.pathname === '/' && <CheckedStudentsCounter count={count} allStudents={allStudents} />}
        <div className="table__header">
          <div className="table__checkbox">
            {useCheckbox ? <TableCheckbox count="#" /> : ''}
          </div>
          <TableHeaders />
          <div className="table__settings-container">
            <img
              className="table__settings-icon"
              src={settingsIcon}
              alt="Иконка шестеренки"
            />
          </div>
        </div>
        <div className="table__row-container">
          {ambassadorData.map((data) => (
            <TableRow
              key={data.id} // Используем уникальный id как ключ
              useCheckbox={useCheckbox}
              ambassadorData={data}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

Table.propTypes = {
  useCheckbox: PropTypes.bool,
  count: PropTypes.number,
  allStudents: PropTypes.number,
};

Table.defaultProps = {
  useCheckbox: false,
  count: 0,
  allStudents: 150,
};
