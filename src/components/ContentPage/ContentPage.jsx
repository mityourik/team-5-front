import { useState } from 'react';
import MainPagePanel from '../MainPagePanel/MainPagePanel';
import TabsNavigation from '../TabsNavigation/TabsNavigation';
import './ContentPage.scss';
import TableContentGrid from '../TableContent/TableContentGrid';

function ContentPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    console.log('search in Cpage', newSearchTerm);
  };

  return (
    <main className="ambassadors-page">
      <TabsNavigation>
        <MainPagePanel onSearch={handleSearch} />
        <TableContentGrid searchTerm={searchTerm} />
      </TabsNavigation>
    </main>
  );
}

export default ContentPage;
