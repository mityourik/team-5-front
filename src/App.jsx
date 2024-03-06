import { Routes, Route } from 'react-router-dom';
import AmbassadorsPage from './components/AmbassadorsPage/AmbassadorsPage';
import AmbassadorPage from './components/AmbassadorPage/AmbassadorPage';
import HeaderSidebarLayout from './components/LayoutHeaderSidebar/HeaderSidebarLayout';
// import SegmentedControl from './UI/SegmentedControl/SegmentedControl';

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
