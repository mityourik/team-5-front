import './AmbassadorsPage.scss';
import TabsNavigation from '../TabsNavigation/TabsNavigation';
import MainPagePanel from '../MainPagePanel/MainPagePanel';
import Example from '../Example/Example';
// import Ambassodrs from '../Ambassodrs/Ambassodrs';

function AmbassadorsPage() {
  return (
    <main className="ambassadors-page">
      <TabsNavigation>
        <MainPagePanel />
        {/* <Ambassodrs /> */}
        <Example />
      </TabsNavigation>
    </main>
  );
}

export default AmbassadorsPage;
