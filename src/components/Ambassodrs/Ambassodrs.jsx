import { AmbassodrsContext } from '../../Contexts/AmbassodrsContext';
import Table from '../../modules/Table/Table';
import './Ambassodrs.scss';

export default function Ambassodrs() {
  return (
    <AmbassodrsContext>
      <section className="section">
        <Table useCheckbox />
      </section>
    </AmbassodrsContext>
  );
}
