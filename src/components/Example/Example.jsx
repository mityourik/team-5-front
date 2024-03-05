import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../UI/Checkbox/Checkbox';
import { ambassadorData, headerListAmbs } from '../../utils/constants';
import './Example.scss';

function AmbassadorRow({
  id,
  index,
  isSelected,
  onToggle,
  fullName,
  trainingProgram,
  status,
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
      <td className="ambassador-table__cell">{status}</td>
      <td className="ambassador-table__cell">{promoCode}</td>
      <td className="ambassador-table__cell">{telegram}</td>
      <td className="ambassador-table__cell">{dateAdded}</td>
      <td className="ambassador-table__cell">{email}</td>
      <td className="ambassador-table__cell">{phoneNumber}</td>
      <td className="ambassador-table__cell">{contactMethod}</td>
      <td className="ambassador-table__cell">{country}</td>
      <td className="ambassador-table__cell">{city}</td>
      <td className="ambassador-table__cell">{education}</td>
      <td className="ambassador-table__cell">{workplaceAndPosition}</td>
      <td className="ambassador-table__cell">{learningGoal}</td>
      <td className="ambassador-table__cell">{plans}</td>
      <td className="ambassador-table__cell"><a href={blogLink} target="_blank" rel="noopener noreferrer">Блог</a></td>
      <td className="ambassador-table__cell">{clothingSize}</td>
      <td className="ambassador-table__cell">{shoeSize}</td>
    </tr>
  );
}

function AmbassadorTable() {
  const [selectedAmbassadors, setSelectedAmbassadors] = useState({});
  const [count, setCount] = useState(0);

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
            </tr>
          </thead>
          <tbody className="ambassador-table__body">
            {ambassadorData.map((ambassador, index) => (
              <AmbassadorRow
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
  status: PropTypes.string.isRequired,
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
};

export default AmbassadorTable;
