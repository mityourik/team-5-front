import PropTypes from 'prop-types';
import './CheckedStudentsCounter.scss';

function CheckedStudentsCounter({ count, allStudents }) {
  return (
    <h3 className="checked-students">
      Выбрано студентов
      {' '}
      {count}
      {' '}
      /
      {' '}
      {allStudents}
    </h3>
  );
}

CheckedStudentsCounter.defaultProps = {
  count: 0,
  allStudents: 0,
};

CheckedStudentsCounter.propTypes = {
  count: PropTypes.number,
  allStudents: PropTypes.number,
};

export default CheckedStudentsCounter;
