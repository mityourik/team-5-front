import { useState } from 'react';
import './SidebarNavigation.scss';
// import PropTypes from 'prop-types';

function SidebarNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`sidebar-nav ${isOpen ? 'sidebar-nav_open' : ''}`}
      >
        <nav className="sidebar-nav__container">
          <ul className="sidebar-nav__list">
            <li className="sidebar-nav__item"><a href="#data" className="sidebar-nav__link">Данные</a></li>
            <li className="sidebar-nav__item"><a href="#analitics" className="sidebar-nav__link">Аналитика</a></li>
            <li className="sidebar-nav__item"><a href="#mailing" className="sidebar-nav__link">Рассылка</a></li>
          </ul>
        </nav>
        <div className="sidebar-nav__separator" />
        <nav className="sidebar-nav__container">
          <ul className="sidebar-nav__list">
            <li className="sidebar-nav__item"><a href="#support" className="sidebar-nav__link">Поддержка</a></li>
            <li className="sidebar-nav__item"><a href="#settings" className="sidebar-nav__link">Настройки</a></li>
          </ul>
        </nav>
      </div>
      <button
        className="sidebar-nav__menu-btn"
        onClick={toggleMenu}
        type="button"
      >
        ☰ Открыть меню
      </button>
    </>
  );
}

export default SidebarNavigation;
