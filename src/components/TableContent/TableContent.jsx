import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import Checkbox from '../../UI/Checkbox/Checkbox';
import { ambassadorData, headerListAmbs } from '../../utils/constants';
import DropdownStatusSelect from '../../UI/Buttons/DropdownButtons/DropdownStatusSelect/DropdownStatusSelect';
import './TableContent.scss';
import TelegramCell from '../../modules/TelegramCell/TelegramCell';
import ContactCell from '../../UI/ContactCell/ContactCell';

function ContentRow({
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
  function onEditAmbClick(ambassadorId) {
    console.log('Действие для амбассадора с ID:', ambassadorId);
    // тут открытие окна редактирования
  }

  return (
    <tr className="content-table__row">
      <td className="content-table__cell">{index + 1}</td>
      <td className="content-table__cell">
        <Checkbox
          isChecked={isSelected}
          onChange={() => onToggle(id)}
          label="Выбрать все"
        />
      </td>
      <td className="content-table__cell">{fullName}</td>
      <td className="content-table__cell">{trainingProgram}</td>
      <td className="content-table__cell">
        {' '}
        <DropdownStatusSelect
          onSelect={(newValue) => onStatusChange(id, newValue)}
        />
      </td>
      <td className="content-table__cell">{promoCode}</td>
      <td
        className="content-table__cell"
      >
        {' '}
        <TelegramCell nickname={telegram} />
      </td>
      <td className="content-table__cell">{dateAdded}</td>
      <td className="content-table__cell">
        {' '}
        <ContactCell
          contact={email}
          isHidden
          type="email"
        />
      </td>
      <td className="content-table__cell">
        {' '}
        <ContactCell
          contact={phoneNumber}
          isHidden
          type="phone"
        />
      </td>
      <td className="content-table__cell">{contactMethod}</td>
      <td className="content-table__cell">{country}</td>
      <td className="content-table__cell">{city}</td>
      <td className="content-table__cell">{education}</td>
      <td className="content-table__cell">{workplaceAndPosition}</td>
      <td className="content-table__cell">{learningGoal}</td>
      <td className="content-table__cell">{plans}</td>
      <td className="content-table__cell"><a className="content-table__cell-link" href={blogLink} target="_blank" rel="noopener noreferrer">Ссылка на блог</a></td>
      <td className="content-table__cell">{clothingSize}</td>
      <td className="content-table__cell">{shoeSize}</td>
      <td className="content-table__cell content-table__cell__edit" onClick={() => onEditAmbClick(id)}>
        Изменить
      </td>
    </tr>
  );
}

function TableContent() {
  const [selectedAmbassadors, setSelectedAmbassadors] = useState({});
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const itemsPerPage = 25; // Количество элементов на странице

  // Считаем количество страниц
  const pageCount = Math.ceil(ambassadorData.length / itemsPerPage);

  // Получаем элементы для текущей страницы
  const currentItems = ambassadorData.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  // Обработчик смены страницы
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
    <div className="content-table__container">
      <div className="content-table__selection-count">
        Выбрано амбассадоров:
        {' '}
        {count}
        {' '}
        /
        {ambassadorData.length}
      </div>
      <div className="content-table__scroll-container">
        <table className="content-table">
          <thead className="content-table__head">
            <tr className="content-table__row">
              <th className="content-table__header">#</th>
              <th className="content-table__header">
                <Checkbox
                  isChecked={count === ambassadorData.length}
                  onChange={(newChecked) => toggleSelectAll(newChecked)}
                  label="Выбрать все"
                />
              </th>
              {headerListAmbs.map((header) => (
                <th key={header.id} className="content-table__header">{header.value}</th>
              ))}
              <th className="content-table__header content-table__cell__edit">Действие</th>
            </tr>
          </thead>
          <tbody className="content-table__body">
            {currentItems.map((ambassador, index) => (
              <ContentRow
                onStatusChange={handleStatusChange}
                key={ambassador.id}
                id={ambassador.id}
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

ContentRow.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  fullName: PropTypes.string.isRequired,
  trainingProgram: PropTypes.string.isRequired,
  //   status: PropTypes.string.isRequired,
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

export default TableContent;
