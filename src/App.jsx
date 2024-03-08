import { Routes, Route } from 'react-router-dom';
import AmbassadorPage from './components/AmbassadorPage/AmbassadorPage';
import HeaderSidebarLayout from './components/LayoutHeaderSidebar/HeaderSidebarLayout';
import TabsNavigation from './components/TabsNavigation/TabsNavigation';
import Paginator from './components/Paginator/Paginator';
import TableSettings from './components/TableSettings/TableSettings';

function App() {
  return (
    <>
      <HeaderSidebarLayout>
        <TabsNavigation />
        <TableSettings />
        <Paginator />
      </HeaderSidebarLayout>
      <Routes>
        <Route path="/team-5-front/ambassador-page" element={<AmbassadorPage />} />
      </Routes>
    </>
  );
}

export default App;
