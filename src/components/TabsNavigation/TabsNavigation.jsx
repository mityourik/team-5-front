import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './TabsNavigation.scss';
import { useState } from 'react';

function TabsNavigation({ children }) {
  const [count] = useState('+4');

  return (
    <main className="main">
      <section className="navigation-tabs">
        <nav aria-label="Основная навигация сайта" className="navigation-tabs__container">
          <ul className="navigation-tabs__list">
            <li className="navigation-tabs__item">
              <NavLink to="/ambassadors" className="navigation-tabs__link">
                Амбассадоры
                <span className="navigation-tabs__link-count">{count}</span>
              </NavLink>
            </li>
            <li className="navigation-tabs__item">
              <NavLink to="/content" className="navigation-tabs__link">
                Контент
                <span className="navigation-tabs__link-count">{count}</span>
              </NavLink>
            </li>
            <li className="navigation-tabs__item">
              <NavLink to="/merch-sending" className="navigation-tabs__link">
                Отправка мерча
                <span className="navigation-tabs__link-count">{count}</span>
              </NavLink>
            </li>
            <li className="navigation-tabs__item">
              <NavLink to="/merch-budget" className="navigation-tabs__link">
                Бюджет на мерч
                <span className="navigation-tabs__link-count">{count}</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        { children }
      </section>
    </main>
  );
}

TabsNavigation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TabsNavigation;
