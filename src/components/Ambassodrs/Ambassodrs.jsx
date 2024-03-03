import { AmbassodrsContext } from '../../Contexts/AmbassodrsContext';
import FilterMailingBtn from '../../UI/Buttons/FilterMailingBtn';
import SearchBar from '../../UI/SearchBar/SearchBar';
import Table from '../../modules/Table/Table';
import './Ambassodrs.scss';

export default function Ambassodrs() {
  return (
    <AmbassodrsContext>
      <section className='section'>
        <div className='section__option-container'>
          <div className='section__search-container'>
          <SearchBar />
          <FilterMailingBtn />
          </div>
          <div className='section__filter-container'>

          </div>
        </div>
        <Table useCheckbox={true} />
      </section>
    </AmbassodrsContext>
  );
}
