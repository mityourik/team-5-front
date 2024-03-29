import { Routes, Route } from 'react-router-dom';
import AmbassadorsPage from './components/AmbassadorsPage/AmbassadorsPage';
import AmbassadorPage from './components/AmbassadorPage/AmbassadorPage';
import NewAmbassadorPage from './components/NewAmbassadorPage/NewAmbassadorPage';
import HeaderSidebarLayout from './components/LayoutHeaderSidebar/HeaderSidebarLayout';
import ContentPage from './components/ContentPage/ContentPage';

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
      <Route
        path="/ambassadors"
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
      <Route path="/ambassador-page/:ambassadorId" element={<AmbassadorPage />} />
      <Route path="/new-ambassador" element={<NewAmbassadorPage />} />
    </Routes>
  );
}

export default App;
