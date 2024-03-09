import MainPagePanel from '../MainPagePanel/MainPagePanel';
import TabsNavigation from '../TabsNavigation/TabsNavigation';
import './ContentPage.scss';
// import TableContent from '../TableContent/TableContent';
import TableContentGrid from '../TableContent/TableContentGrid';

function ContentPage() {
  return (
    <main className="ambassadors-page">
      <TabsNavigation>
        <MainPagePanel />
        <TableContentGrid />
      </TabsNavigation>
    </main>
  );
}

export default ContentPage;
