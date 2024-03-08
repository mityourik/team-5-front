import { useState } from 'react';
import ToggleSwitch from '../../UI/ToggleSwitch/ToggleSwitch';
import './TableSettings.scss';

function TableSettings() {
  const [isCredentials, setIsCredentials] = useState(true);
  const [isCurriculum, setIsCurriculum] = useState(true);
  const [isStatus, setIsStatus] = useState(true);
  const [isPromoCode, setIsPromoCode] = useState(true);
  const [isEmail, setIsEmail] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isContacts, setIsContacts] = useState(true);
  const [isCountry, setIsCountry] = useState(false);
  const [isCity, setIsCity] = useState(false);
  const [isEducation, setIsEducation] = useState(false);
  const [isWorkPlaceAndPosition, setIsWorkPlaceAndPosition] = useState(false);
  const [isEducationGoal, setIsEducationGoal] = useState(false);
  const [isWantsToDo, setIsWantsToDo] = useState(false);
  const [isBlogLink, setIsBlogLink] = useState(false);
  const [isClothesSize, setIsClothesSize] = useState(false);
  const [isShoeSize, setIsShoeSize] = useState(false);
  const [isDateAdded, setIsDateAdded] = useState(true);

  return (
    <div className="table-settings">
      <div className="table-settings__header">Настройка таблицы</div>
      <ul className="table-settings__list">
        <li className="table-settings__list-item">
          <ToggleSwitch label="ФИО" id="credentials" isToggled={isCredentials} setIsToggled={setIsCredentials} />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch label="Программа обучения" id="curriculum" isToggled={isCurriculum} setIsToggled={setIsCurriculum} />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch label="Статус" id="status" isToggled={isStatus} setIsToggled={setIsStatus} />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch label="Промокод" id="promoCode" isToggled={isPromoCode} setIsToggled={setIsPromoCode} />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch label="Электронная почта" id="email" isToggled={isEmail} setIsToggled={setIsEmail} />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch label="Номер телефона" id="phone" isToggled={isPhone} setIsToggled={setIsPhone} />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch label="Способ связи" id="contacts" isToggled={isContacts} setIsToggled={setIsContacts} />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch label="Страна" id="country" isToggled={isCountry} setIsToggled={setIsCountry} />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch label="Город" id="city" isToggled={isCity} setIsToggled={setIsCity} />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch label="Образование" id="education" isToggled={isEducation} setIsToggled={setIsEducation} />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch label="Место работы и должность" id="workPlaceAndPosition" isToggled={isWorkPlaceAndPosition} setIsToggled={setIsWorkPlaceAndPosition} />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch label="Цель обучения" id="EducationGoal" isToggled={isEducationGoal} setIsToggled={setIsEducationGoal} />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch label="Что хочет делать?" id="wantsToDo" isToggled={isWantsToDo} setIsToggled={setIsWantsToDo} />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch label="Ссылка на блог" id="blogLink" isToggled={isBlogLink} setIsToggled={setIsBlogLink} />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch label="Размер одежды" id="clothesSize" isToggled={isClothesSize} setIsToggled={setIsClothesSize} />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch label="Размер ноги" id="shoeSize" isToggled={isShoeSize} setIsToggled={setIsShoeSize} />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch label="Дата добавления" id="dateAdded" isToggled={isDateAdded} setIsToggled={setIsDateAdded} />
        </li>
      </ul>
      <button className="table-settings__button" type="button">
        Выключить необязательные
      </button>
    </div>
  );
}

export default TableSettings;
