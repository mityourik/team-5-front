import { useContext } from 'react';
import Ambassodrs from '../../Contexts/AmbassodrsContext';

export default function TableHeaders() {
  const headerListAmbs = useContext(Ambassodrs);

  return (
    <div className='header-row'>
      {headerListAmbs.map(header => (
        <div key={header.id} className='header-row__header'>
          <p className='header-row__text'>{header.value}</p>
        </div>
      ))}
    </div>
  );
}
