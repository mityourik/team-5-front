import { useState } from 'react';
import './AmbassadorsPage.scss';
import TabsNavigation from '../TabsNavigation/TabsNavigation';
import MainPagePanel from '../MainPagePanel/MainPagePanel';
import TableAmbassadors from '../TableAmbassadors/TableAmbassadors';
import TableSettings from '../TableSettings/TableSettings';

function AmbassadorsPage() {
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

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
      </TabsNavigation>
    </main>
  );
}

export default AmbassadorsPage;
