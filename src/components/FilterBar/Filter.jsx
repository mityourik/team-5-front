import { useState } from 'react';
import RangeDatePicker from '../../UI/Calendar/RangeDatePicker';
import './Filter.scss';
import DropdownButtonSelect from '../../UI/Buttons/DropdownButtons/DropdownButtonSelect/DropdownButtonSelect';

function Filter() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const resetFilters = () => {
    setStartDate(null);
    setEndDate(null);
  };

  const optionsProgram = [
    'IT-рекрутер',
    'Аналитик данных',
    'Python-разработчик',
    'Веб-разработчик',
    'C++',
    'Специалист по Data Science',
    'SQL для работы с данными и аналитиками',
    'Инженер по тестированию (QA)',
    'Продакт менеджер для специалистов с опытом',
    'DevOps для эксплуатации и разработки',
  ];

  const optionsGender = [
    'Женский',
    'Мужской',
    'Non-binary',
  ];

  const optionsStatus = [
    'Активный',
    'На паузе',
    'Не амбассадор',
    'Уточняется',
  ];

  const optionsCity = [
    'Москва',
    'Санкт-Петербург',
    'Новосибирск',
    'Екатеринбург',
    'Нижний Новгород',
    'Казань',
    'Челябинск',
    'Омск',
    'Самара',
    'Ростов-на-Дону',
    'Уфа',
    'Красноярск',
    'Воронеж',
    'Пермь',
    'Волгоград',
    'Краснодар',
    'Саратов',
    'Тюмень',
    'Тольятти',
    'Ижевск',
    'Барнаул',
    'Ульяновск',
    'Иркутск',
    'Хабаровск',
    'Ярославль',
    'Владивосток',
    'Махачкала',
    'Томск',
    'Оренбург',
    'Кемерово',
    'Новокузнецк',
    'Рязань',
    'Астрахань',
    'Набережные Челны',
    'Пенза',
    'Липецк',
    'Тула',
    'Киров',
    'Чебоксары',
    'Калининград',
    'Брянск',
    'Иваново',
    'Магнитогорск',
    'Ханты-Мансийск',
    'Тверь',
    'Ставрополь',
    'Белгород',
    'Сочи',
  ];

  const handleSelection = (selectedOption) => {
    console.log('Выбранная опция:', selectedOption);
  };

  return (
    <form className="filter-form">

      <div className="filter-form__area filter-form__area--gender">
        <label htmlFor="genderSelect" className="filter-form__label">
          Пол
          <DropdownButtonSelect
            options={optionsGender}
            onSelect={handleSelection}
            id="genderSelect"
          />
        </label>
      </div>

      <div className="filter-form__area filter-form__area--program">
        <label htmlFor="programSelect" className="filter-form__label">
          Программа обучения
          <DropdownButtonSelect
            options={optionsProgram}
            onSelect={handleSelection}
            id="programSelect"
          />
        </label>
      </div>

      <div className="filter-form__area filter-form__area--status">
        <label htmlFor="statusSelect" className="filter-form__label">
          Статус
          <DropdownButtonSelect
            options={optionsStatus}
            onSelect={handleSelection}
            id="statusSelect"
          />
        </label>
      </div>

      <div className="filter-form__area filter-form__area--city">
        <label htmlFor="citySelect" className="filter-form__label">
          Город
          <DropdownButtonSelect
            options={optionsCity}
            onSelect={handleSelection}
            id="citySelect"
          />
        </label>
      </div>

      <div className="filter-form__area filter-form__area--date-range">
        <label htmlFor="dateSelect" className="filter-form__label">
          Дата регистрации
          <RangeDatePicker
            id="dateSelect"
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
