import PropTypes from 'prop-types';
import headerLogo from '../../assets/header__logo.svg';
import headerProfileImage from '../../assets/header__user-content_image.png';
import headerBellImage from '../../assets/header__bell-image.svg';
import './Header.scss';

function Header({ isOpen }) {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-content">
          <a href="#index" className="header__home-link"><img className="header__logo" alt="Логотип Яндекс" src={headerLogo} /></a>
          <h1 className={`header__ambassadors ${isOpen ? 'header__ambassadors_visible' : ''}`}>Амбассадоры</h1>
        </div>
        <div className="header__user-content">
          <img
            className="header__user-content_bell"
            alt="Иконка колокольчика"
            src={headerBellImage}
          />
          <img
            className="header__user-content_image"
            alt="Фото Менеджера"
            src={headerProfileImage}
          />
          <div className="header__user-content_title">
            <h3 className="header__user-content_title header__user-content_title_name">
              Анастасия Борисова
            </h3>
            <h4 className="header__user-content_title header__user-content_title_position">
              Комьюнити-менеджер
            </h4>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Header;
