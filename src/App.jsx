// import { useState } from 'react';
// import Header from './components/Header/Header';
// import NavBar from './components/NavBar/NavBar';
// import DropdownButton from './UI/Buttons/DropdownButton1/DropdownButton1';
// import FilterMailingBtn from './UI/Buttons/FilterMailingBtn';
// import SearchBar from './UI/SearchBar/SearchBar';
// import imgFilter from './UI/Buttons/assets/AmbFilterButtonImg.svg';

import DropdownButtonSelect from './UI/Buttons/DropdownButtons/DropdownButtonSelect/DropdownButtonSelect';
// import Filter from './components/FilterBar/Filter';

function App() {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleMouseEnter = () => setIsOpen(true);
  // const handleMouseLeave = () => setIsOpen(false);

  // const handleSearch = (searchTerm) => {
  //   console.log('Поиск:', searchTerm);
  // };

  // const menuOptions = [
  //   {
  //     label: 'Добавить вручную',
  //     action: () => console.log('Добавление вручную'),
  //   },
  //   {
  //     label: 'Импортировать',
  //     action: () => console.log('Импорт'),
  //   },
  // ];

  const options = ['IT-рекрутер', 'Аналитик данных', 'Python-разработчик', 'Веб-разработчик', 'C++'];

  const handleSelection = (selectedOption) => {
    console.log('Выбранная опция:', selectedOption);
  };

  return (
    <div style={{ padding: '64px' }}>
      {/* <Filter /> */}
      {/* <DropdownButton
        buttonLabel="ываЫВа"
        menuOptions={menuOptions}
      /> */}
      <DropdownButtonSelect
        options={options}
        onSelect={handleSelection}
      />
    </div>
  );
}

export default App;
