import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import AmbassadorPage from './components/AmbassadorPage/AmbassadorPage';
import HeaderSidebarLayout from './components/LayoutHeaderSidebar/HeaderSidebarLayout';
import TabsNavigation from './components/TabsNavigation/TabsNavigation';
import Paginator from './components/Paginator/Paginator';
import ToggleSwitch from './UI/ToggleSwitch/ToggleSwitch';

function App() {
  const [isEasyToggled, setIsEasyToggled] = useState(false);

  return (
    <>
      <HeaderSidebarLayout>
        <TabsNavigation />
        <ToggleSwitch label="Легкий" id="easy" isToggled={isEasyToggled} setIsToggled={setIsEasyToggled} />
        <Paginator />
      </HeaderSidebarLayout>
      <Routes>
        <Route path="/team-5-front/ambassador-page" element={<AmbassadorPage />} />
      </Routes>
    </>
  );
}

export default App;
