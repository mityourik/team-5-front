import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import Checkbox from '../../UI/Checkbox/Checkbox';
import { ambassadorData, headerListAmbs } from '../../utils/constants';
import { getAmbassadorData } from '../../services/selectors/ambassadorSelector';
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
  fullName,
  trainingProgram,
  onStatusChange,
  promoCode,
  telegram,
  dateAdded,
  email,
  phoneNumber,
  contactMethod,
  country,
  city,
  education,
  workplaceAndPosition,
  learningGoal,
  plans,
  blogLink,
  clothingSize,
  shoeSize,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function onEditAmbClick(ambassadorId) {
    dispatch(fetchAmbassadorInfo(ambassadorId));
    navigate(`ambassador-page/${ambassadorId}`);
    console.log('Действие для амбассадора с ID:', ambassadorId);
    // тут открытие окна редактирования
  }

  useEffect(() => {
    dispatch(fetchGetAllAmbassadors());
  }, [dispatch]);

  // здесь будет список со всеми амб-ами с сервера
  const ambassadorList = useSelector((state) => state.ambassador.ambassadorList);
  // console.log('ambassadorList', ambassadorList);

  // используем этот ambassadorData, и из него вытаскиваем нужные поля
  // программа обучения вытаскивается через ambassadorData.study_programm.title (пример ниже)
  const ambassadorData = useSelector(getAmbassadorData);

  // имя амб-ра собирается из 3х частей:
  const ambassadorName = `${ambassadorData.name || 'Василий'} ${ambassadorData.patronymic || 'Васильевич'} ${ambassadorData.surname || 'Пупкин'}`;

  return (
    <tr className="ambassador-table__row">
      <td className="ambassador-table__cell">{index + 1}</td>
      <td className="ambassador-table__cell">
        <Checkbox
          isChecked={isSelected}
          onChange={() => onToggle(id)}
          label="Выбрать все"
        />
      </td>
      <td className="ambassador-table__cell">{fullName}</td>
      <td className="ambassador-table__cell">{trainingProgram}</td>
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
        <TelegramCell nickname={telegram} />
      </td>
      <td className="ambassador-table__cell">{dateAdded}</td>
      <td className="ambassador-table__cell">
        {' '}
        <ContactCell
          contact={email}
          isHidden
          type="email"
        />
      </td>
      <td className="ambassador-table__cell">
        {' '}
        <ContactCell
          contact={phoneNumber}
          isHidden
          type="phone"
        />
      </td>
      <td className="ambassador-table__cell">{contactMethod}</td>
      <td className="ambassador-table__cell">{country}</td>
      <td className="ambassador-table__cell">{city}</td>
      <td className="ambassador-table__cell">{education}</td>
      <td className="ambassador-table__cell">{workplaceAndPosition}</td>
      <td className="ambassador-table__cell">{learningGoal}</td>
      <td className="ambassador-table__cell">{plans}</td>
      <td className="ambassador-table__cell"><a className="ambassador-table__cell-link" href={blogLink} target="_blank" rel="noopener noreferrer">Ссылка на блог</a></td>
      <td className="ambassador-table__cell">{clothingSize}</td>
      <td className="ambassador-table__cell">{shoeSize}</td>
      <td className="ambassador-table__cell ambassador-table__cell__edit" onClick={() => onEditAmbClick(id)}>
        Изменить
      </td>
    </tr>
  );
}

function AmbassadorTable() {
  const [selectedAmbassadors, setSelectedAmbassadors] = useState({});
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const itemsPerPage = 25;

  const pageCount = Math.ceil(ambassadorData.length / itemsPerPage);

  const currentItems = ambassadorData.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  const handlePageClick = (selectedItem) => {
    setPage(selectedItem.selected);
  };

  useEffect(() => {
    setCount(Object.values(selectedAmbassadors).filter(Boolean).length);
  }, [selectedAmbassadors]);

  const toggleAmbassadorSelection = (id) => {
    setSelectedAmbassadors((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleSelectAll = (newChecked) => {
    const newSelectedAmbassadors = {};
    ambassadorData.forEach((ambassador) => {
      newSelectedAmbassadors[ambassador.id] = newChecked;
    });
    setSelectedAmbassadors(newSelectedAmbassadors);
  };

  const isSelected = (id) => !!selectedAmbassadors[id];

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
        {ambassadorData.length}
      </div>
      <div className="ambassador-table__scroll-container">
        <table className="ambassador-table">
          <thead className="ambassador-table__head">
            <tr className="ambassador-table__row">
              <th className="ambassador-table__header">#</th>
              <th className="ambassador-table__header">
                <Checkbox
                  isChecked={count === ambassadorData.length}
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
                onStatusChange={handleStatusChange}
                key={ambassadorData.id}
                id={ambassadorData.id}
                index={index}
                isSelected={isSelected(ambassador.id)}
                onToggle={toggleAmbassadorSelection}
                fullName={ambassador.fullName}
                trainingProgram={ambassador.trainingProgram}
                status={ambassador.status}
                promoCode={ambassador.promoCode}
                telegram={ambassador.telegram}
                dateAdded={ambassador.dateAdded}
                email={ambassador.email}
                phoneNumber={ambassador.phoneNumber}
                contactMethod={ambassador.contactMethod}
                country={ambassador.country}
                city={ambassador.city}
                education={ambassador.education}
                workplaceAndPosition={ambassador.workplaceAndPosition}
                learningGoal={ambassador.learningGoal}
                plans={ambassador.plans}
                blogLink={ambassador.blogLink}
                clothingSize={ambassador.clothingSize}
                shoeSize={ambassador.shoeSize}
              />
            ))}
          </tbody>
        </table>
      </div>
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="paginator"
        pageClassName="paginator__item"
        pageLinkClassName="paginator__link"
        activeClassName="paginator__link--active"
        breakClassName="paginator__item--break"

      />
    </div>
  );
}

AmbassadorRow.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  fullName: PropTypes.string.isRequired,
  trainingProgram: PropTypes.string.isRequired,
  promoCode: PropTypes.string.isRequired,
  telegram: PropTypes.string.isRequired,
  dateAdded: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  contactMethod: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  education: PropTypes.string.isRequired,
  workplaceAndPosition: PropTypes.string.isRequired,
  learningGoal: PropTypes.string.isRequired,
  plans: PropTypes.string.isRequired,
  blogLink: PropTypes.string.isRequired,
  clothingSize: PropTypes.string.isRequired,
  shoeSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onStatusChange: PropTypes.func.isRequired,
};

export default AmbassadorTable;
