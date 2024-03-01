import { Routes, Route } from 'react-router-dom';
import MainPagePanel from './components/MainPagePanel/MainPagePanel';
import AmbassadorPage from './components/AmbassadorPage/AmbassadorPage';

function App() {
  return (
    <Routes>
      <Route path="/team-5-front/" element={<MainPagePanel />} />
      <Route path="/team-5-front/ambassador-page" element={<AmbassadorPage />} />
    </Routes>
  );
}

export default App;
