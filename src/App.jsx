import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import AmbassadorPage from './components/AmbassadorPage/AmbassadorPage';
import HeaderSidebarLayout from './components/LayoutHeaderSidebar/HeaderSidebarLayout';
import TabsNavigation from './components/TabsNavigation/TabsNavigation';
import Paginator from './components/Paginator/Paginator';
// import SegmentedControl from './UI/SegmentedControl/SegmentedControl';
import Toggle from './UI/Toggle/Toggle';
import ToggleSwitch from './UI/ToggleSwitch/ToggleSwitch';

function App() {
  // let isActive = true;
  const [isToughActive, setIsToughActive] = useState(true);
  const handleChangeTough = () => { setIsToughActive(!isToughActive); };

  return (
    <>
      <HeaderSidebarLayout>
        <TabsNavigation />
        <Toggle label="Тяжелый" id="tough" isActive={isToughActive} onChange={handleChangeTough} />
        <ToggleSwitch label="Легкий" />
        {/* <Toggle label="тяжелый" id="tough" isActive onChange={console.log('Hi')} /> */}
        <Paginator />
      </HeaderSidebarLayout>
      <Routes>
        <Route path="/team-5-front/ambassador-page" element={<AmbassadorPage />} />
      </Routes>
    </>
  );
}

export default App;
