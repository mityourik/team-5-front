import MainPagePanel from '../MainPagePanel/MainPagePanel';
import TabsNavigation from '../TabsNavigation/TabsNavigation';
import './ContentPage.scss';
import TableContent from '../TableContent/TableContent';

function ContentPage() {
  return (
    <main className="ambassadors-page">
      <TabsNavigation>
        <MainPagePanel />
        <TableContent />
      </TabsNavigation>
    </main>
  );
}

export default ContentPage;
