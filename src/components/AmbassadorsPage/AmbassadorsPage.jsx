import './AmbassadorsPage.scss';
import TabsNavigation from '../TabsNavigation/TabsNavigation';
import MainPagePanel from '../MainPagePanel/MainPagePanel';
import Example from '../Example/Example';

function AmbassadorsPage() {
  return (
    <main className="ambassadors-page">
      <TabsNavigation>
        <MainPagePanel />
        <Example />
      </TabsNavigation>
    </main>
  );
}

export default AmbassadorsPage;
