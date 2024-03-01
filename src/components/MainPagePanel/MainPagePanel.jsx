import { useState } from 'react';
import DropdownButton from '../../UI/Buttons/DropdownButtons/DropdownButton/DropdownButton';
import FilterMailingBtn from '../../UI/Buttons/FilterMailingBtn';
import SearchBar from '../../UI/SearchBar/SearchBar';
import filterImg from '../../UI/Buttons/assets/AmbFilterButtonImg.svg';
import filterImgHover from '../../UI/Buttons/assets/AmbFilterBtnHover.svg';
import mailImg from '../../UI/Buttons/assets/envelopeWhite.svg';
import mailImgBlue from '../../UI/Buttons/assets/envelopeBlue.svg';
import './MainPagePanel.scss';
import Filter from '../FilterBar/Filter';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';

const menuOptions = [
  {
    label: 'Добавить вручную',
    action: () => console.log('Добавление вручную'),
  },
  {
    label: 'Импортировать',
    action: () => console.log('Импорт'),
  },
];

function MainPagePanel() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const handleSearch = (searchTerm) => {
    console.log('Поиск:', searchTerm);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="main-page">
      <Header isOpen={isOpen} />
      <NavBar
        isOpen={isOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <div className="main-page-panel">
        <div className="main-page-panel__container main-page-panel__container__content_search">
          <SearchBar
            placeholder="Поиск амбассадора"
            onSearch={handleSearch}
          />
          <FilterMailingBtn
            backgroundImage={filterImg}
            backgroundImageHover={filterImgHover}
            backgroundImageActive={filterImgHover}
            backgroundImageFocus={filterImgHover}
            text="Фильтры"
            onClick={handleClick}
          />
        </div>
        <div className="main-page-panel__container main-page-panel__container__content_mailing">
          <FilterMailingBtn
            backgroundImage={mailImgBlue}
            backgroundImageHover={mailImg}
            backgroundImageActive={mailImg}
            backgroundImageFocus={mailImg}
            text="Написать"
            onClick={handleClick}
          />
          <DropdownButton
            buttonLabel="Добавить Амбассадора"
            menuOptions={menuOptions}
          />
        </div>
      </div>
      {isOpen && (
        <div className="filter-container">
          <Filter />
        </div>
      )}
    </section>
  );
}

export default MainPagePanel;
