import { Routes, Route } from 'react-router-dom';
import AmbassadorPage from './components/AmbassadorsPage/AmbassadorsPage';
import HeaderSidebarLayout from './components/LayoutHeaderSidebar/HeaderSidebarLayout';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <HeaderSidebarLayout>
            <AmbassadorPage />
          </HeaderSidebarLayout>
      )}
      />
      <Route path="/ambassador-page" element={<AmbassadorPage />} />
    </Routes>
  );
}

export default App;
