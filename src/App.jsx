import { Routes, Route } from 'react-router-dom';
import HeaderSidebarLayout from './components/LayoutHeaderSidebar/HeaderSidebarLayout';
import AmbassadorsPage from './components/AmbassadorsPage/AmbassadorsPage';
import ContentPage from './components/ContentPage/ContentPage';
import AmbassadorPage from './components/AmbassadorPage/AmbassadorPage';

function App() {
  return (
    <Routes>
      <Route
        path="/home"
        element={(
          <HeaderSidebarLayout>
            <AmbassadorsPage />
          </HeaderSidebarLayout>
      )}
      />
      <Route
        path="/content"
        element={(
          <HeaderSidebarLayout>
            <ContentPage />
          </HeaderSidebarLayout>
      )}
      />
      <Route path="/ambassador-page" element={<AmbassadorPage />} />
    </Routes>
  );
}

export default App;
