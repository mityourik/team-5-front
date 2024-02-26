import { useState } from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <>
      <Header isOpen={isOpen} />
      <NavBar
        isOpen={isOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </>
  );
}

export default App;
