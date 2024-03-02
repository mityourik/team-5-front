import { useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';

function HeaderSidebarLayout({ children }) {
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
      {children}
    </>
  );
}

HeaderSidebarLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderSidebarLayout;
