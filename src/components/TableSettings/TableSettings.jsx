import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ToggleSwitch from '../../UI/ToggleSwitch/ToggleSwitch';
import './TableSettings.scss';

function TableSettings({ settings, updateSettings, onClose }) {
  const settingsRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        onClose(); // Эта функция должна менять состояние, чтобы скрыть компонент
      }
    }

    // Добавляем слушатель события
    document.addEventListener('mousedown', handleClickOutside);

    // Подчищаем за собой
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="table-settings" ref={settingsRef}>
      <div className="table-settings__header">Настройка таблицы</div>
      <ul className="table-settings__list">
        <li className="table-settings__list-item">
          <ToggleSwitch
            label="ФИО"
            id="credentials"
            isToggled={settings.isCredentials}
            setIsToggled={(value) => updateSettings('isCredentials', value)}
          />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch
            label="Программа обучения"
            id="curriculum"
            isToggled={settings.isCurriculum}
            setIsToggled={(value) => updateSettings('isCurriculum', value)}
          />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch
            label="Статус"
            id="status"
            isToggled={settings.isStatus}
            setIsToggled={(value) => updateSettings('isStatus', value)}
          />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch
            label="Промокод"
            id="promoCode"
            isToggled={settings.isPromoCode}
            setIsToggled={(value) => updateSettings('isPromoCode', value)}
          />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch
            label="Телеграм"
            id="telegram"
            isToggled={settings.isTelegram}
            setIsToggled={(value) => updateSettings('isTelegram', value)}
          />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch
            label="Дата добавления"
            id="created"
            isToggled={settings.isCreated}
            setIsToggled={(value) => updateSettings('isCreated', value)}
          />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch
            label="Электронная почта"
            id="email"
            isToggled={settings.isEmail}
            setIsToggled={(value) => updateSettings('isEmail', value)}
          />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch
            label="Номер телефона"
            id="phone"
            isToggled={settings.isPhone}
            setIsToggled={(value) => updateSettings('isPhone', value)}
          />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch
            label="Способ связи"
            id="contacts"
            isToggled={settings.isContacts}
            setIsToggled={(value) => updateSettings('isContacts', value)}
          />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch
            label="Страна"
            id="country"
            isToggled={settings.isCountry}
            setIsToggled={(value) => updateSettings('isCountry', value)}
          />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch
            label="Город"
            id="city"
            isToggled={settings.isCity}
            setIsToggled={(value) => updateSettings('isCity', value)}
          />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch
            label="Образование"
            id="education"
            isToggled={settings.isEducation}
            setIsToggled={(value) => updateSettings('isEducation', value)}
          />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch
            label="Место работы и должность"
            id="workPlaceAndPosition"
            isToggled={settings.isWorkPlaceAndPosition}
            setIsToggled={(value) => updateSettings('isWorkPlaceAndPosition', value)}
          />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch
            label="Цель обучения"
            id="educationGoal"
            isToggled={settings.isEducationGoal}
            setIsToggled={(value) => updateSettings('isEducationGoal', value)}
          />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch
            label="Что хочет делать?"
            id="wantsToDo"
            isToggled={settings.isWantsToDo}
            setIsToggled={(value) => updateSettings('isWantsToDo', value)}
          />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch
            label="Цель"
            id="aim"
            isToggled={settings.isAim}
            setIsToggled={(value) => updateSettings('isAim', value)}
          />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch
            label="Ссылка на блог"
            id="blogLink"
            isToggled={settings.isBlogLink}
            setIsToggled={(value) => updateSettings('isBlogLink', value)}
          />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch
            label="Размер одежды"
            id="clothesSize"
            isToggled={settings.isClothesSize}
            setIsToggled={(value) => updateSettings('isClothesSize', value)}
          />
        </li>
        <li className="table-settings__list-item">
          <ToggleSwitch
            label="Размер обуви"
            id="shoeSize"
            isToggled={settings.isShoeSize}
            setIsToggled={(value) => updateSettings('isShoeSize', value)}
          />
        </li>
      </ul>
      <button
        className="table-settings__button"
        type="button"
        onClick={() => {
          // Пример того, как можно было бы реализовать выключение необязательных настроек
          // Здесь могут быть дополнительные условия или логика
          Object.keys(settings).forEach((key) => updateSettings(key, false));
        }}
      >
        Выключить необязательные
      </button>
    </div>
  );
}

TableSettings.propTypes = {
  settings: PropTypes.shape({
    isCredentials: PropTypes.bool.isRequired,
    isCurriculum: PropTypes.bool.isRequired,
    isStatus: PropTypes.bool.isRequired,
    isPromoCode: PropTypes.bool.isRequired,
    isTelegram: PropTypes.bool.isRequired,
    isCreated: PropTypes.bool.isRequired,
    isEmail: PropTypes.bool.isRequired,
    isPhone: PropTypes.bool.isRequired,
    isContacts: PropTypes.bool.isRequired,
    isCountry: PropTypes.bool.isRequired,
    isCity: PropTypes.bool.isRequired,
    isEducation: PropTypes.bool.isRequired,
    isWorkPlaceAndPosition: PropTypes.bool.isRequired,
    isEducationGoal: PropTypes.bool.isRequired,
    isWantsToDo: PropTypes.bool.isRequired,
    isAim: PropTypes.bool.isRequired,
    isBlogLink: PropTypes.bool.isRequired,
    isClothesSize: PropTypes.bool.isRequired,
    isShoeSize: PropTypes.bool.isRequired,
  }).isRequired,
  updateSettings: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TableSettings;
