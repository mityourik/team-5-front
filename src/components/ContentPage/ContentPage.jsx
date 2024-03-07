import MainPagePanel from '../MainPagePanel/MainPagePanel';
// import TableContent from '../TableContent/TableContent';
import TabsNavigation from '../TabsNavigation/TabsNavigation';
import './ContentPage.scss';
import Cont from '../TableContent/Cont';

function ContentPage() {
  return (
    <main className="ambassadors-page">
      <TabsNavigation>
        <MainPagePanel />
        <Cont />
      </TabsNavigation>
    </main>
  );
}

export default ContentPage;
