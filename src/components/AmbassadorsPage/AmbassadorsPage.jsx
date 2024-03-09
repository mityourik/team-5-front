import './AmbassadorsPage.scss';
import TabsNavigation from '../TabsNavigation/TabsNavigation';
import MainPagePanel from '../MainPagePanel/MainPagePanel';
import TableAmbassadors from '../TableAmbassadors/TableAmbassadors';

function AmbassadorsPage() {
  return (
    <main className="ambassadors-page">
      <TabsNavigation>
        <MainPagePanel />
        <TableAmbassadors />
      </TabsNavigation>
    </main>
  );
}

export default AmbassadorsPage;
