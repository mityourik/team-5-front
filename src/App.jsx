import './App.scss';
// import { AmbassodrsContext } from './Contexts/AmbassodrsContext';
import { Routes, Route } from 'react-router-dom';
import Ambassodrs from './components/Ambassodrs/Ambassodrs';
import AmbassadorPage from './components/AmbassadorPage/AmbassadorPage';
import HeaderSidebarLayout from './components/LayoutHeaderSidebar/HeaderSidebarLayout';
import TabsNavigation from './components/TabsNavigation/TabsNavigation';
import MainPagePanel from './components/MainPagePanel/MainPagePanel';

function App() {
  return (
    <Routes>
      <Route
        path="/team-5-front"
        element={(
          <HeaderSidebarLayout>
            <TabsNavigation>
              <MainPagePanel />
              <Ambassodrs />
            </TabsNavigation>
          </HeaderSidebarLayout>
      )}
      />
      <Route path="/team-5-front/ambassador-page" element={<AmbassadorPage />} />
    </Routes>
  );
}

export default App;
