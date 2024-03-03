import { useState } from 'react';
import RangeDatePicker from '../../UI/Calendar/RangeDatePicker';
import './Filter.scss';

function Filter() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const resetFilters = () => {
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <form className="filter-form">
      <div className="filter-form__area filter-form__area--gender">
        <label className="filter-form__label">
          Пол
          <select name="gender" className="filter-form__select">
            <option value="">Выберите пол</option>
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
            <option value="female">Небинарная личность</option>
          </select>
        </label>
      </div>

      <div className="filter-form__area filter-form__area--program">
        <label className="filter-form__label">
          Программа обучения
          <select name="program" className="filter-form__select">
            <option value="">Выберите программу</option>
            <option value="it-recruiter">IT-рекрутер</option>
            <option value="data-analyst">Аналитик данных</option>
            {/* остальные программы */}
          </select>
        </label>
      </div>

      <div className="filter-form__area filter-form__area--status">
        <label className="filter-form__label">
          Статус
          <select name="status" className="filter-form__select">
            <option value="">Выберите статус</option>
            <option value="active">Активный</option>
            <option value="on_hold">На паузе</option>
            {/* остальные статусы */}
          </select>
        </label>
      </div>

      <div className="filter-form__area filter-form__area--city">
        <label className="filter-form__label">
          Город
          <select name="city" className="filter-form__select">
            <option value="">Выберите город</option>
            <option value="moscow">Москва</option>
            <option value="saint_petersburg">Санкт-Петербург</option>
            {/* остальные города */}
          </select>
        </label>
      </div>

      <div className="filter-form__area filter-form__area--date-range">
        <label className="filter-form__label">
          Дата регистрации
          {/* без этого коммента ошибка управления */}
          <RangeDatePicker
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </label>
      </div>

      <div className="filter-form__area filter-form__area--reset">
        <span className="filter-form__span filter-form__span__reset" />
        <button type="button" className="filter-form__button filter-form__button--reset" onClick={resetFilters}>Очистить фильтры</button>
      </div>
      <div className="filter-form__area filter-form__area--apply">
        <button type="submit" className="filter-form__button filter-form__button--apply">Применить</button>
      </div>
    </form>
  );
}

export default Filter;
