import {
  useEffect, useState, useRef, useMemo,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
// import ReactPaginate from 'react-paginate';
import Checkbox from '../../UI/Checkbox/Checkbox';
import { headerListAmbs, settingsKeyMap } from '../../utils/constants';
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
  settings,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onEditAmbClick() {
    dispatch(fetchAmbassadorInfo(id));
    navigate(`/ambassador-page/${id}`);
  }

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
      {settings.isCredentials && <td className="ambassador-table__cell">{ambassadorName}</td>}
      {settings.isCurriculum && <td className="ambassador-table__cell">{ambassadorData.study_programm.title}</td>}
      {settings.isStatus && (
      <td className="ambassador-table__cell">
        {' '}
        <DropdownStatusSelect
          onSelect={(newValue) => onStatusChange(id, newValue)}
        />
      </td>
      )}
      {settings.isPromoCode && <td className="ambassador-table__cell">{promoCode}</td>}
      <td
        className="ambassador-table__cell"
      >
        {' '}
        {settings.isTelegram && <TelegramCell nickname={ambassadorData.telegram_handle} />}
      </td>
      {settings.isCreated && <td className="ambassador-table__cell">{ambassadorData.date_created}</td>}
      {settings.isEmail && (
      <td className="ambassador-table__cell">
        {' '}
        <ContactCell
          contact={ambassadorData.email}
          isHidden
          type="email"
        />
      </td>
      )}
      {settings.isPhone && (
      <td className="ambassador-table__cell">
        {' '}
        <ContactCell
          contact={ambassadorData.phone}
          isHidden
          type="phone"
        />
      </td>
      )}
      {settings.isContacts && <td className="ambassador-table__cell">{contPreferences}</td>}
      {settings.isCountry && <td className="ambassador-table__cell">{ambassadorData.country}</td>}
      {settings.isCity && <td className="ambassador-table__cell">{ambassadorData.city}</td>}
      {settings.isEducation && <td className="ambassador-table__cell">{ambassadorData.education}</td>}
      {settings.isWorkPlaceAndPosition && <td className="ambassador-table__cell">{ambassadorData.job}</td>}
      {settings.isWantsToDo && <td className="ambassador-table__cell">{ambassadorData.want_to_do}</td>}
      {settings.isAim && <td className="ambassador-table__cell">{ambassadorData.aim}</td>}
      {settings.isBlogLink && (
      <td className="ambassador-table__cell">
        <a className="ambassador-table__cell-link" href={ambassadorData.blog_url} target="_blank" rel="noopener noreferrer">Ссылка на блог</a>
      </td>
      )}
      {settings.isClothesSize && <td className="ambassador-table__cell">{ambassadorData.shirt_size}</td>}
      {settings.isShoeSize && <td className="ambassador-table__cell">{ambassadorData.shoes_size}</td>}
      <td
        className="ambassador-table__cell edit-column"
        onClick={() => onEditAmbClick(id)}
      >
        <button
          className="ambassador-table__cell ambassador-table__cell__button-edit"
          type="button"
        >
          {' '}
        </button>
      </td>
    </tr>
  );
}

function AmbassadorTable({ settings, onSettingsClick, searchTerm }) {
  const dispatch = useDispatch();
  const ambassadorList = useSelector((state) => state.ambassador.ambassadorList);
  const [selectedAmbassadors, setSelectedAmbassadors] = useState({});
  const [page] = useState(0);
  const itemsPerPage = 25;

  const filteredAmbassadors = useMemo(() => {
    if (!ambassadorList.results || !Array.isArray(ambassadorList.results)) {
      return [];
    }
    return ambassadorList.results.filter(
      (ambassador) => ambassador.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [ambassadorList, searchTerm]);

  useEffect(() => {
    dispatch(fetchGetAllAmbassadors());
  }, [dispatch]);

  // const pageCount = Math.ceil(ambassadorList.length / itemsPerPage);

  // eslint-disable-next-line max-len
  const currentItems = useMemo(() => filteredAmbassadors.slice(page * itemsPerPage, (page + 1) * itemsPerPage), [filteredAmbassadors, page, itemsPerPage]);

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
    setSelectedAmbassadors((prevSelected) => {
      const newSelected = {};
      Object.keys(prevSelected).forEach((id) => {
        newSelected[id] = newChecked;
      });
      return newSelected;
    });
  };

  // const isSelected = (id) => !!selectedAmbassadors[id];
  const allSelected = Object.values(selectedAmbassadors).every(Boolean);
  const noneSelected = Object.values(selectedAmbassadors).every((isSelected) => !isSelected);

  const handleStatusChange = (id, newStatus) => {
    console.log(`Status for id: ${id} changed to ${newStatus}`);
    // передача в запрос
  };

  return (
    <div className="ambassador-table__container">
      <div className="ambassador-table__selection-count">
        Выбрано амбассадоров
        {' '}
        {count}
        {' '}
        /
        {' '}
        {ambassadorList.count}
      </div>
      <div className="ambassador-table__scroll-container">
        <table className="ambassador-table">
          <thead className="ambassador-table__head">
            <tr className="ambassador-table__row">
              <th className="ambassador-table__header">#</th>
              <th className="ambassador-table__header">
                <Checkbox
                  isChecked={allSelected}
                  isIndeterminate={!allSelected && !noneSelected}
                  onChange={(newChecked) => toggleSelectAll(newChecked)}
                  label="Выбрать все"
                />
              </th>
              {headerListAmbs.map(({ id, value }) => {
                const settingKey = settingsKeyMap[value];
                return settings[settingKey] && <th key={id} className="ambassador-table__header">{value}</th>;
              })}
              {/* {headerListAmbs.map((header) => (
                <th key={header.id} className="ambassador-table__header">{header.value}</th>
              ))} */}
              <th
                className="ambassador-table__header edit-column"
                onClick={onSettingsClick}
              >
                <button
                  className="ambassador-table__header ambassador-table__header__button-settings"
                  type="button"
                >
                  {' '}
                </button>
              </th>
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
                settings={settings}
              />
            ))}
          </tbody>
        </table>
      </div>
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
  }).isRequired,
  settings: PropTypes.shape({
    isCredentials: PropTypes.bool,
    isCurriculum: PropTypes.bool,
    isStatus: PropTypes.bool,
    isPromoCode: PropTypes.bool,
    isTelegram: PropTypes.bool,
    isCreated: PropTypes.bool,
    isEmail: PropTypes.bool,
    isPhone: PropTypes.bool,
    isContacts: PropTypes.bool,
    isCountry: PropTypes.bool,
    isCity: PropTypes.bool,
    isEducation: PropTypes.bool,
    isWorkPlaceAndPosition: PropTypes.bool,
    isEducationGoal: PropTypes.bool,
    isWantsToDo: PropTypes.bool,
    isAim: PropTypes.bool,
    isBlogLink: PropTypes.bool,
    isClothesSize: PropTypes.bool,
    isShoeSize: PropTypes.bool,
  }).isRequired,
};

AmbassadorTable.propTypes = {
  settings: PropTypes.shape({
    isCredentials: PropTypes.bool,
    isCurriculum: PropTypes.bool,
    isStatus: PropTypes.bool,
    isPromoCode: PropTypes.bool,
    isTelegram: PropTypes.bool,
    isCreated: PropTypes.bool,
    isEmail: PropTypes.bool,
    isPhone: PropTypes.bool,
    isContacts: PropTypes.bool,
    isCountry: PropTypes.bool,
    isCity: PropTypes.bool,
    isEducation: PropTypes.bool,
    isWorkPlaceAndPosition: PropTypes.bool,
    isEducationGoal: PropTypes.bool,
    isWantsToDo: PropTypes.bool,
    isAim: PropTypes.bool,
    isBlogLink: PropTypes.bool,
    isClothesSize: PropTypes.bool,
    isShoeSize: PropTypes.bool,
  }).isRequired,
  onSettingsClick: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
};

export default AmbassadorTable;
