// MyContext.js
import { createContext } from 'react';
import { headerListAmbs } from '../utils/constants';


const Ambassodrs = createContext();

export function AmbassodrsContext({ children }) {
  return (
    <Ambassodrs.Provider value={headerListAmbs}>
      {children}
    </Ambassodrs.Provider>
  );
}

export default Ambassodrs;
