import { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Sidebar from '../NavBar/NavBar';
import SearchBar from '../../UI/SearchBar/SearchBar';
import FilterButton from '../../UI/Buttons/FilterButton';
import MailingButton from '../../UI/Buttons/MailingButton';
import DropdownButton from '../../UI/Buttons/DropdownButtons/DropdownButton/DropdownButton';
import Filter from '../FilterBar/Filter';
import TabsNavigation from '../TabsNavigation/TabsNavigation';

function LayoutHeaderSidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const handleSearch = (searchTerm) => {
    console.log('Поиск:', searchTerm);
  };

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

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

  return (
    <>
      <Header isOpen={isOpen} />
      <Sidebar
        isOpen={isOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <TabsNavigation />
      <SearchBar
        placeholder="Поиск амбассадора"
        onSearch={handleSearch}
      />
      <FilterButton
        text="Фильтры"
        onClick={handleFilterClick}
        isFilterOpen={isFilterOpen}
      />
      <div className="main-page-panel__container main-page-panel__container__content_mailing">
        <MailingButton
          text="Написать"
          onClick={() => console.log('откройся рассылка')}
        />
        <DropdownButton
          buttonLabel="Добавить Амбассадора"
          menuOptions={menuOptions}
        />
      </div>
      {isFilterOpen && (
        <div className="filter-container">
          <Filter />
        </div>
      )}
      {children}
    </>
  );
}

LayoutHeaderSidebar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutHeaderSidebar;
