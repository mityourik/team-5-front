import './SidebarStatic.scss';
import sidebarStIconData from '../../assets/sidebarStDataIcon.svg';
import sidebarStIconAnalitics from '../../assets/sidebarStIconAnalitics.svg';
import sidebarStIconMailing from '../../assets/sidebarStIconMailing.svg';
import sidebarStIconSupport from '../../assets/sidebarStIconSupport.svg';
import sidebarStIconSettings from '../../assets/sidebarStIconSettings.svg';

function SidebarStatic() {
  return (
    <div className="sidebar-static">
      <div className="sidebar-static__container">
        <div className="sidebar-static__item">
          <img className="sidebar-static__icon" alt="Иконка Данные" src={sidebarStIconData} />
          <span className="sidebar-static__span">Данные</span>
        </div>
        <div className="sidebar-static__item">
          <img className="sidebar-static__icon" alt="Иконка Аналитика" src={sidebarStIconAnalitics} />
          <span className="sidebar-static__span">Аналитика</span>
        </div>
        <div className="sidebar-static__item">
          <img className="sidebar-static__icon" alt="Иконка Рассылка" src={sidebarStIconMailing} />
          <span className="sidebar-static__span">Рассылка</span>
        </div>
        <div className="sidebar-static__separator" />
        <div className="sidebar-static__item">
          <img className="sidebar-static__icon" alt="Иконка Поддержка" src={sidebarStIconSupport} />
          <span className="sidebar-static__span">Поддержка</span>
        </div>
        <div className="sidebar-static__item">
          <img className="sidebar-static__icon" alt="Иконка Настройка" src={sidebarStIconSettings} />
          <span className="sidebar-static__span">Настройки</span>
        </div>
      </div>
    </div>
  );
}

export default SidebarStatic;
