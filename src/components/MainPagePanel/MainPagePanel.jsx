import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsNewAmbassadorAddingTrue } from '../../services/slices/ambassadorSlice';
import DropdownButton from '../../UI/Buttons/DropdownButtons/DropdownButton/DropdownButton';
import SearchBar from '../../UI/SearchBar/SearchBar';
import './MainPagePanel.scss';
import Filter from '../FilterBar/Filter';
import FilterButton from '../../UI/Buttons/FilterButton';
import MailingButton from '../../UI/Buttons/MailingButton';

function MainPagePanel({ onSearch }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const menuOptions = [
    {
      label: 'Добавить вручную',
      // action: () => console.log('Добавление вручную'),
      action: () => {
        navigate('/new-ambassador');
        dispatch(setIsNewAmbassadorAddingTrue());
      },
    },
    {
      label: 'Импортировать',
      action: () => console.log('Импорт'),
    },
  ];

  return (
    <section className="main-page">
      <div className="main-page-panel">
        <div className="main-page-panel__container main-page-panel__container__content_search">
          <SearchBar placeholder="Поиск амбассадора" onSearchChange={onSearch} />
          <FilterButton
            text="Фильтры"
            onClick={handleFilterClick}
            isFilterOpen={isFilterOpen}
          />
        </div>
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
      </div>
      {isFilterOpen && (
        <div className="filter-container">
          <Filter />
        </div>
      )}
    </section>
  );
}

MainPagePanel.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default MainPagePanel;
