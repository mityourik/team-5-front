// import { AmbassodrsContext } from './Contexts/AmbassodrsContext';
import { Routes, Route } from 'react-router-dom';
// import Ambassodrs from './components/Ambassodrs/Ambassodrs';
import AmbassadorPage from './components/AmbassadorPage/AmbassadorPage';
import HeaderSidebarLayout from './components/LayoutHeaderSidebar/HeaderSidebarLayout';
import AmbassadorsPage from './components/AmbassadorsPage/AmbassadorsPage';
// import TabsNavigation from './components/TabsNavigation/TabsNavigation';
// import MainPagePanel from './components/MainPagePanel/MainPagePanel';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <HeaderSidebarLayout>
            <AmbassadorsPage />
          </HeaderSidebarLayout>
      )}
      />
      <Route path="/ambassador-page" element={<AmbassadorPage />} />
    </Routes>
  );
}

export default App;
