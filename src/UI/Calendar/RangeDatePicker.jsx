import { forwardRef, useImperativeHandle, useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import './RangeDatePicker.scss';
import ru from 'date-fns/locale/ru';

registerLocale('ru', ru);

const CustomInput = forwardRef(({ value, onClick, placeholder }, ref) => {
  useImperativeHandle(ref, () => ({
    onClick,
  }));

  const buttonClass = `example-custom-input ${value ? 'selected-date' : 'placeholder'}`;

  return (
    <button type="button" className={buttonClass} onClick={onClick}>
      {value || placeholder}
    </button>
  );
});

function RangeDatePicker({
  startDate, setStartDate, endDate, setEndDate, id,
}) {
  const [startPickerOpen, setStartPickerOpen] = useState(false);
  const [endPickerOpen, setEndPickerOpen] = useState(false);

  return (
    <div className="date-picker-container">
      <DatePicker
        id={`${id}-start`}
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          setStartPickerOpen(false);
        }}
        onClickOutside={() => setStartPickerOpen(false)}
        onCalendarOpen={() => setStartPickerOpen(true)}
        onCalendarClose={() => setStartPickerOpen(false)}
        open={startPickerOpen}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        isClearable
        placeholderText="Начало"
        dateFormat="dd MMM yyyy"
        locale="ru"
        popperPlacement="bottom-start"
        customInput={<CustomInput value={startDate ? startDate.toDateString() : ''} placeholder="Начало" />}
      >
        <div className="buttons-container">
          <button type="button" className="clear-button" onClick={() => { setStartDate(null); setEndDate(null); }}>
            Удалить
          </button>
          <button type="button" className="save-button" onClick={() => setStartPickerOpen(false)}>
            Сохранить
          </button>
        </div>
      </DatePicker>
      <p className="date-picker-line">
      &thinsp;&mdash;&thinsp;
      </p>
      <DatePicker
        id={`${id}-end`}
        selected={endDate}
        onChange={(date) => {
          setEndDate(date);
          setEndPickerOpen(false);
        }}
        onClickOutside={() => setEndPickerOpen(false)}
        onCalendarOpen={() => setEndPickerOpen(true)}
        onCalendarClose={() => setEndPickerOpen(false)}
        open={endPickerOpen}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        isClearable
        placeholderText="Конец"
        dateFormat="dd MMM yyyy"
        locale="ru"
        popperPlacement="bottom-start"
        customInput={<CustomInput value={endDate ? endDate.toDateString() : ''} placeholder="Конец" />}
      >
        <div className="buttons-container">
          <button type="button" className="clear-button" onClick={() => { setStartDate(null); setEndDate(null); }}>
            Удалить
          </button>
          <button type="button" className="save-button" onClick={() => setEndPickerOpen(false)}>
            Сохранить
          </button>
        </div>
      </DatePicker>

    </div>
  );
}

CustomInput.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
};

CustomInput.defaultProps = {
  value: '',
  placeholder: '',
  onClick: () => {},
};

RangeDatePicker.propTypes = {
  id: PropTypes.string.isRequired,
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
