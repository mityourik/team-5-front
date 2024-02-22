import headerLogo from '../../assets/header__logo.svg';
import headerProfileImage from '../../assets/header__user-content_image.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" alt="Логотип Яндекс" src={headerLogo} />
        <div className="header__user-content">
          <img
            className="header__user-content_image"
            alt="Фото Менеджера"
            src={headerProfileImage}
          />
          <div className="header__user-content_title">
            <h3 className="header__user-content_title header__user-content_title_name">Анастасия Борисова</h3>
            <h4 className="header__user-content_title header__user-content_title_position">
              Комьюнити-менеджер
            </h4>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
