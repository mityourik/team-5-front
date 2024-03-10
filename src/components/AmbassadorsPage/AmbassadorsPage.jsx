import { useState, useEffect } from 'react';
import './AmbassadorsPage.scss';
import ReactPaginate from 'react-paginate';
import TabsNavigation from '../TabsNavigation/TabsNavigation';
import MainPagePanel from '../MainPagePanel/MainPagePanel';
import TableAmbassadors from '../TableAmbassadors/TableAmbassadors';
import TableSettings from '../TableSettings/TableSettings';

function AmbassadorsPage() {
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [currentPage, setCurrentPage] = useState(0);
  const [dataForDisplay, setDataForDisplay] = useState([]);

  const closeSettings = () => setIsSettingsVisible(false);
  const openSettings = () => setIsSettingsVisible(true);

  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    console.log('search in Apage', newSearchTerm);
  };

  const [settings, setSettings] = useState({
    isCredentials: true,
    isCurriculum: true,
    isStatus: true,
    isPromoCode: true,
    isTelegram: true,
    isCreated: true,
    isEmail: false,
    isPhone: false,
    isContacts: true,
    isCountry: false,
    isCity: false,
    isEducation: false,
    isWorkPlaceAndPosition: false,
    isEducationGoal: false,
    isAim: false,
    isWantsToDo: false,
    isBlogLink: false,
    isClothesSize: false,
    isShoeSize: false,
  });

  const updateSettings = (key, value) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [key]: value,
    }));
  };

  const perPage = 3; // Количество элементов на странице
  // let pageCount;

  useEffect(() => {
    // Подготовка данных для текущей страницы
    const offset = currentPage * perPage;
    setDataForDisplay(yourData.slice(offset, offset + perPage));
    // pageCount = Math.ceil(dataForDisplay.length / perPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  // Обработчик изменения страницы
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  return (
    <main className="ambassadors-page">
      <TabsNavigation>
        <MainPagePanel onSearch={handleSearch} />
        {isSettingsVisible && (
          <TableSettings
            settings={settings}
            updateSettings={updateSettings}
            onClose={closeSettings}
          />
        )}
        <TableAmbassadors
          settings={settings}
          onSettingsClick={openSettings}
          searchTerm={searchTerm}
        />
        <ReactPaginate
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item previous-page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item next-page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          activeClassName="active"
          breakLabel="…"
          nextLabel={<svg xmlns="http://www.w3.org/2000/svg" width="6" height="13" fill="none"><path fill="#1A1B22" d="M.26 1a.834.834 0 0 0 0 1.179L4.08 6.004a.852.852 0 0 1 0 1.18L.26 11.007a.834.834 0 0 0 1.178 1.18L5.26 8.364a2.502 2.502 0 0 0 0-3.54L1.438 1A.833.833 0 0 0 .26 1Z" /></svg>}
          pageCount={Math.ceil(yourData.length / perPage)}
          previousLabel={<svg xmlns="http://www.w3.org/2000/svg" width="6" height="12" fill="none"><path fill="#1A1B22" d="M5.982.945a.833.833 0 0 1-.245.59L1.916 5.356a.85.85 0 0 0 0 1.179l3.821 3.821a.833.833 0 0 1-1.178 1.179L.737 7.713a2.56 2.56 0 0 1 0-3.536L4.56.357a.833.833 0 0 1 1.423.588Z" /></svg>}
          renderOnZeroPageCount={null}
          containerClassName="pagination"
        />
      </TabsNavigation>
    </main>
  );
}

export default AmbassadorsPage;
