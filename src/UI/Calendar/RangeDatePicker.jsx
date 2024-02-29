import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import './RangeDatePicker.scss';

function CustomInput({ value, onClick }) {
  return (
    <button type="button" className="example-custom-input" onClick={onClick}>
      {value}
    </button>
  );
}

function RangeDatePicker({
  startDate, setStartDate, endDate, setEndDate,
}) {
  return (
    <div className="date-picker-container">
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        isClearable
        placeholderText="Начало"
        dateFormat="dd MMM yyyy"
        locale="ru"
        popperPlacement="bottom-start"
      >
        <div className="buttons-container">
          <button type="button" className="clear-button" onClick={() => { setStartDate(null); setEndDate(null); }}>
            Удалить
          </button>
          <button type="button" className="save-button">
            Сохранить
          </button>
        </div>
      </DatePicker>
      <p className="date-picker-line">
      &thinsp;&mdash;&thinsp;
      </p>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        isClearable
        placeholderText="Конец"
        dateFormat="dd MMM yyyy"
        locale="ru"
        popperPlacement="bottom-start"
      >
        <div className="buttons-container">
          <button type="button" className="clear-button" onClick={() => { setStartDate(null); setEndDate(null); }}>
            Удалить
          </button>
          <button type="button" className="save-button">
            Сохранить
          </button>
        </div>
      </DatePicker>

    </div>
  );
}

CustomInput.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

RangeDatePicker.propTypes = {
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  setStartDate: PropTypes.func.isRequired,
  setEndDate: PropTypes.func.isRequired,
};

RangeDatePicker.defaultProps = {
  startDate: null,
  endDate: null,
};

export default RangeDatePicker;
