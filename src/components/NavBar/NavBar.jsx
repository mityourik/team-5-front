import { useEffect } from 'react';
import './NavBar.scss';
import PropTypes from 'prop-types';
import sidebarStIconData from '../../assets/sidebarStDataIcon.svg';
import sidebarStIconAnalitics from '../../assets/sidebarStIconAnalitics.svg';
import sidebarStIconMailing from '../../assets/sidebarStIconMailing.svg';
import sidebarStIconSupport from '../../assets/sidebarStIconSupport.svg';
import sidebarStIconSettings from '../../assets/sidebarStIconSettings.svg';

function NavBar({ isOpen, onMouseEnter, onMouseLeave }) {
  const handleKeyDown = (event) => {
    if ((event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') && isOpen) {
      onMouseLeave();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    // Функция очистки
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onMouseLeave]);

  return (
    <>
      <div
        className={`overlay ${isOpen ? 'overlay--visible' : ''}`}
        onClick={onMouseLeave}
        onKeyDown={handleKeyDown} // Добавьте это
        tabIndex="0" // Важно для доступности, делает элемент фокусируемым
        role="button" // Указывает на интерактивную роль элемента
        aria-label="Закрыть меню"
      />
      <div className="nav-bar" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {isOpen && (
          <nav className="nav-bar__container">
            <ul className="nav-bar__list">
              <li className="nav-bar__item">
                <a href="#data" className="nav-bar__link">
                  <img className="nav-bar__icon" alt="Иконка Данные" src={sidebarStIconData} />
                  Данные
                </a>
              </li>
              <li className="nav-bar__item">
                <a href="#analitics" className="nav-bar__link">
                  <img className="nav-bar__icon" alt="Иконка Аналитика" src={sidebarStIconAnalitics} />
                  Аналитика
                </a>
              </li>
              <li className="nav-bar__item">
                <a href="#mailing" className="nav-bar__link">
                  <img className="nav-bar__icon" alt="Иконка Рассылка" src={sidebarStIconMailing} />
                  Рассылка
                </a>
              </li>
            </ul>
          </nav>
        )}
        {!isOpen && (
        <nav className="nav-bar__container_closed">
          <ul className="nav-bar__list_closed">
            <li className="nav-bar__item_closed">
              <a href="#data" className="nav-bar__link_closed">
                <img className="nav-bar__icon_closed" alt="Иконка Данные" src={sidebarStIconData} />
                Данные
              </a>
            </li>
            <li className="nav-bar__item_closed">
              <a href="#data" className="nav-bar__link_closed">
                <img className="nav-bar__icon_closed" alt="Иконка Аналитика" src={sidebarStIconAnalitics} />
                Аналитика
              </a>
            </li>
            <li className="nav-bar__item_closed">
              <a href="#data" className="nav-bar__link_closed">
                <img className="nav-bar__icon_closed" alt="Иконка Рассылка" src={sidebarStIconMailing} />
                Рассылка
              </a>
            </li>
          </ul>
        </nav>
        )}
        {/* <div className={isOpen ? 'nav-bar__separator' : 'nav-bar__separator_closed'} /> */}
        {isOpen && (
          <nav className="nav-bar__container">
            <ul className="nav-bar__list">
              <li className="nav-bar__item">
                <a href="#support" className="nav-bar__link">
                  <img className="nav-bar__icon" alt="Иконка Поддержка" src={sidebarStIconSupport} />
                  Поддержка
                </a>
              </li>
              <li className="nav-bar__item">
                <a href="#settings" className="nav-bar__link">
                  <img className="nav-bar__icon" alt="Иконка Настройки" src={sidebarStIconSettings} />
                  Настройки
                </a>
              </li>
            </ul>
          </nav>
        )}
        {!isOpen && (
          <nav className="nav-bar__footer_container_closed">
            <ul className="nav-bar__footer_list_closed">
              <li className="nav-bar__footer_item_closed">
                <a href="#support" className="nav-bar__footer_link_closed">
                  <img className="nav-bar__footer_icon_closed" alt="Иконка Поддержка" src={sidebarStIconSupport} />
                  Поддержка
                </a>
              </li>
              <li className="nav-bar__footer_item_closed">
                <a href="#settings" className="nav-bar__footer_link_closed">
                  <img className="nav-bar__footer_icon_closed" alt="Иконка Настройки" src={sidebarStIconSettings} />
                  Настройки
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
}

NavBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default NavBar;
