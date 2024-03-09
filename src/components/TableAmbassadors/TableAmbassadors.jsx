import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
// import ReactPaginate from 'react-paginate';
import Checkbox from '../../UI/Checkbox/Checkbox';
import { headerListAmbs } from '../../utils/constants';
// import { getAmbassadorData } from '../../services/selectors/ambassadorSelector';
import { fetchAmbassadorInfo, fetchGetAllAmbassadors } from '../../services/thunks/ambassadorThunk';
import DropdownStatusSelect from '../../UI/Buttons/DropdownButtons/DropdownStatusSelect/DropdownStatusSelect';
import './TableAmbassadors.scss';
import TelegramCell from '../../modules/TelegramCell/TelegramCell';
import ContactCell from '../../UI/ContactCell/ContactCell';

function AmbassadorRow({
  id,
  index,
  isSelected,
  onToggle,
  onStatusChange,
  ambassadorData,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onEditAmbClick() {
    dispatch(fetchAmbassadorInfo(id));
    navigate(`/ambassador-page/${id}`);
  }

  // const ambassadorList = useSelector((state) => state.ambassador.ambassadorList);

  // const ambassadorData = useSelector(getAmbassadorData);

  const ambassadorName = `${ambassadorData.name || 'Василий'} ${ambassadorData.patronymic || 'Васильевич'} ${ambassadorData.surname || 'Пупкин'}`;
  const promoCode = `${ambassadorData.promocode || 'PROMOCODE'}`;
  const contPreferences = `${ambassadorData.contact_preferences || 'Электронная почта'}`;

  return (
    <tr className="ambassador-table__row">
      <td className="ambassador-table__cell">{index + 1}</td>
      <td className="ambassador-table__cell">
        {' '}
        <Checkbox isChecked={isSelected} onChange={() => onToggle(id)} label="" />
      </td>
      <td className="ambassador-table__cell">{ambassadorName}</td>
      <td className="ambassador-table__cell">{ambassadorData.study_programm.title}</td>
      <td className="ambassador-table__cell">
        {' '}
        <DropdownStatusSelect
          onSelect={(newValue) => onStatusChange(id, newValue)}
        />
      </td>
      <td className="ambassador-table__cell">{promoCode}</td>
      <td
        className="ambassador-table__cell"
      >
        {' '}
        <TelegramCell nickname={ambassadorData.telegram_handle} />
      </td>
      <td className="ambassador-table__cell">{ambassadorData.date_created}</td>
      <td className="ambassador-table__cell">
        {' '}
        <ContactCell
          contact={ambassadorData.email}
          isHidden
          type="email"
        />
      </td>
      <td className="ambassador-table__cell">
        {' '}
        <ContactCell
          contact={ambassadorData.phone}
          isHidden
          type="phone"
        />
      </td>
      <td className="ambassador-table__cell">{contPreferences}</td>
      <td className="ambassador-table__cell">{ambassadorData.country}</td>
      <td className="ambassador-table__cell">{ambassadorData.city}</td>
      <td className="ambassador-table__cell">{ambassadorData.education}</td>
      <td className="ambassador-table__cell">{ambassadorData.job}</td>
      <td className="ambassador-table__cell">{ambassadorData.want_to_do}</td>
      <td className="ambassador-table__cell">{ambassadorData.aim}</td>
      <td className="ambassador-table__cell"><a className="ambassador-table__cell-link" href={ambassadorData.blog_url} target="_blank" rel="noopener noreferrer">Ссылка на блог</a></td>
      <td className="ambassador-table__cell">{ambassadorData.shirt_size}</td>
      <td className="ambassador-table__cell">{ambassadorData.shoes_size}</td>
      <td className="ambassador-table__cell ambassador-table__cell__edit" onClick={() => onEditAmbClick(id)}>
        Изменить
      </td>
    </tr>
  );
}

function AmbassadorTable() {
  const dispatch = useDispatch();
  const ambassadorList = useSelector((state) => state.ambassador.ambassadorList);
  const [selectedAmbassadors, setSelectedAmbassadors] = useState({});
  const [page] = useState(0);
  const itemsPerPage = 25;

  useEffect(() => {
    dispatch(fetchGetAllAmbassadors());
  }, [dispatch]);

  // const pageCount = Math.ceil(ambassadorList.length / itemsPerPage);

  const currentItems = ambassadorList && ambassadorList.results
    ? ambassadorList.results.slice(page * itemsPerPage, (page + 1) * itemsPerPage)
    : [];

  const count = Object.values(selectedAmbassadors).filter(Boolean).length;

  // const handlePageClick = (selectedItem) => {
  //   setPage(selectedItem.selected);
  // };

  const prevAmbassadorListRef = useRef();

  useEffect(() => {
    const hasAmbassadorListChanged = prevAmbassadorListRef.current !== ambassadorList;
    prevAmbassadorListRef.current = ambassadorList;

    if (hasAmbassadorListChanged && ambassadorList && ambassadorList.results) {
      const newSelectedAmbassadors = {};
      ambassadorList.results.forEach((ambassador) => {
        if (selectedAmbassadors[ambassador.id] !== undefined) {
          newSelectedAmbassadors[ambassador.id] = selectedAmbassadors[ambassador.id];
        } else {
          newSelectedAmbassadors[ambassador.id] = false;
        }
      });
      setSelectedAmbassadors(newSelectedAmbassadors);
    }
  }, [ambassadorList]); // Уберите selectedAmbassadors из массива зависимостей

  const toggleAmbassadorSelection = (id) => {
    setSelectedAmbassadors((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleSelectAll = (newChecked) => {
    const newSelectedAmbassadors = {};
    // Исправление: Используйте ambassadorList вместо ambassadorData
    ambassadorList.results.forEach((ambassador) => {
      newSelectedAmbassadors[ambassador.id] = newChecked;
    });
    setSelectedAmbassadors(newSelectedAmbassadors);
  };

  // const isSelected = (id) => !!selectedAmbassadors[id];

  const handleStatusChange = (id, newStatus) => {
    console.log(`Status for id: ${id} changed to ${newStatus}`);
    // передача в запрос
  };

  return (
    <div className="ambassador-table__container">
      <div className="ambassador-table__selection-count">
        Выбрано амбассадоров:
        {' '}
        {count}
        {' '}
        /
        {ambassadorList.count}
      </div>
      <div className="ambassador-table__scroll-container">
        <table className="ambassador-table">
          <thead className="ambassador-table__head">
            <tr className="ambassador-table__row">
              <th className="ambassador-table__header">#</th>
              <th className="ambassador-table__header">
                <Checkbox
                  isChecked={count === ambassadorList.length && ambassadorList.length > 0}
                  onChange={(newChecked) => toggleSelectAll(newChecked)}
                  label="Выбрать все"
                />
              </th>
              {headerListAmbs.map((header) => (
                <th key={header.id} className="ambassador-table__header">{header.value}</th>
              ))}
              <th className="ambassador-table__header ambassador-table__cell__edit">Действие</th>
            </tr>
          </thead>
          <tbody className="ambassador-table__body">
            {currentItems.map((ambassador, index) => (
              <AmbassadorRow
                key={ambassador.id}
                id={ambassador.id}
                index={page * itemsPerPage + index}
                isSelected={!!selectedAmbassadors[ambassador.id]}
                onToggle={toggleAmbassadorSelection}
                onStatusChange={handleStatusChange}
                ambassadorData={ambassador}
              />
            ))}
          </tbody>
        </table>
      </div>
      {/* <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={(selectedItem) => setPage(selectedItem.selected)}
        containerClassName="paginator"
        pageClassName="paginator__item"
        pageLinkClassName="paginator__link"
        activeClassName="paginator__link--active"
        breakClassName="paginator__item--break"
      /> */}
    </div>
  );
}

AmbassadorRow.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  ambassadorData: PropTypes.shape({
    name: PropTypes.string,
    patronymic: PropTypes.string,
    surname: PropTypes.string,
    study_programm: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    promocode: PropTypes.string,
    telegram_handle: PropTypes.string,
    date_created: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    contact_preferences: PropTypes.string,
    country: PropTypes.string,
    city: PropTypes.string,
    education: PropTypes.string,
    job: PropTypes.string,
    want_to_do: PropTypes.string,
    aim: PropTypes.string,
    blog_url: PropTypes.string,
    shirt_size: PropTypes.string,
    shoes_size: PropTypes.number,
    // Добавьте остальные поля, если они используются в вашем компоненте
  }).isRequired,
};

export default AmbassadorTable;
