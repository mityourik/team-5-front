import './App.scss';
import { AmbassodrsContext } from './Contexts/AmbassodrsContext';
import Ambassodrs from './components/Ambassodrs/Ambassodrs';
import Header from './components/Header/Header';
import SideNavigation from './components/SideNavigation/SideNavigation';

function App() {
  return (
    <>
      <Header />
      <section className='main'>
        <SideNavigation />
        <Ambassodrs />
      </section>
    </>
  );
}

export default App;
