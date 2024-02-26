import { useState } from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
// import SidebarStatic from './components/SidearStatic/SidebarStatic';
// import SideNavigation from './components/SideNavigation/SidebarNavigation';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <>
      <Header isOpen={isOpen} />
      <NavBar isOpen={isOpen} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
      {/* <SidebarStatic />
      <SideNavigation /> */}
    </>
  );
}

export default App;
