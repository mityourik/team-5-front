// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header/Header';
// import NavBar from './components/NavBar/NavBar';
// import FilterMailingBtn from './UI/Buttons/FilterMailingBtn';
// import SearchBar from './UI/SearchBar/SearchBar';
// import imgFilter from './UI/Buttons/assets/AmbFilterButtonImg.svg';
import AmbassadorPage from './components/AmbassadorPage/AmbassadorPage';

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
  //   {
  //     label: 'Импортировать',
  //     action: () => console.log('Импорт'),
  //   },
  //   {
  //     label: 'Импортировать',
  //     action: () => console.log('Импорт'),
  //   },
  //   {
  //     label: 'Импортировать',
  //     action: () => console.log('Импорт'),
  //   },
  //   {
  //     label: 'Импортировать',
  //     action: () => console.log('Импорт'),
  //   },
  // ];

  return (
    <>
      {/* <Header isOpen={isOpen} />
      <NavBar
        isOpen={isOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      /> */}
      {/* <SearchBar
        onSearch={handleSearch}
      />
      <DropdownButton
        buttonLabel="Добавить амбассадора"
        menuOptions={menuOptions}
      />
      <FilterMailingBtn
        backgroundImage={imgFilter}
      /> */}
      <Routes>
        <Route path="/ambassador-page" element={<AmbassadorPage />} />
      </Routes>
    </>
  );
}

export default App;
