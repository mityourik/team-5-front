import './App.scss';
import { AmbassodrsContext } from './Contexts/AmbassodrsContext';
import Ambassodrs from './components/Ambassodrs/Ambassodrs';
import { Routes, Route } from 'react-router-dom';
import AmbassadorPage from './components/AmbassadorPage/AmbassadorPage';
import HeaderSidebarLayout from './components/LayoutHeaderSidebar/HeaderSidebarLayout';
import TabsNavigation from './components/TabsNavigation/TabsNavigation';

function App() {
  return (
    <>
      <HeaderSidebarLayout>
        <TabsNavigation />
        <Ambassodrs  />
      </HeaderSidebarLayout>
      <Routes>
        <Route path="/team-5-front/ambassador-page" element={<AmbassadorPage />} />
      </Routes>
    </>
  );
}

export default App;
