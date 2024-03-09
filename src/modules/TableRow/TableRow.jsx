import PropTypes from 'prop-types';
import TableCheckbox from '../TableCheckbox/TableCheckbox';
import TelegramCell from '../TelegramCell/TelegramCell';
import dotsIcon from '../../assets/three-dots-vertical.svg';
import './TableRow.scss';

export default function TableRow({ ambassadorData, useCheckbox }) {
  return (
    <div className="row">
      {useCheckbox && <TableCheckbox />}
      <div className="row__container">
        <div className="row__name">
          <p className="row__name-text">{ambassadorData.fullName}</p>
        </div>
        <div className="row__program">
          <p className="row__program-text">{ambassadorData.trainingProgram}</p>
        </div>
        <div className="row__status">
          <p className="row__status-text">{ambassadorData.status}</p>
        </div>
        <div className="row__promo">
          <p className="row__promo-text">{ambassadorData.promoCode}</p>
        </div>
        <div className="row__telegram">
          <TelegramCell username={ambassadorData.telegram} />
        </div>
        <div className="row__date">
          <p className="row__date-text">{ambassadorData.dateAdded}</p>
        </div>
        <div className="row__email">
          <p className="row__email-text">{ambassadorData.email}</p>
        </div>
        <div className="row__phone">
          <p className="row__phone-text">{ambassadorData.phoneNumber}</p>
        </div>
        <div className="row__contact-method">
          <p className="row__contact-method-text">{ambassadorData.contactMethod}</p>
        </div>
        <div className="row__country">
          <p className="row__country-text">{ambassadorData.country}</p>
        </div>
        <div className="row__city">
          <p className="row__city-text">{ambassadorData.city}</p>
        </div>
        <div className="row__education">
          <p className="row__education-text">{ambassadorData.education}</p>
        </div>
        <div className="row__work">
          <p className="row__work-text">{ambassadorData.workplaceAndPosition}</p>
        </div>
        <div className="row__learning-goal">
          <p className="row__learning-goal-text">{ambassadorData.learningGoal}</p>
        </div>
        <div className="row__interests">
          <p className="row__interests-text">{ambassadorData.plans}</p>
        </div>
        <div className="row__blog">
          <a href={ambassadorData.blogLink} target="_blank" rel="noopener noreferrer" className="row__blog-link">Блог</a>
        </div>
        <div className="row__clothing-size">
          <p className="row__clothing-size-text">{ambassadorData.clothingSize}</p>
        </div>
        <div className="row__shoe-size">
          <p className="row__shoe-size-text">{ambassadorData.shoeSize}</p>
        </div>
        <div className="row__option-container">
          <img
            className="row__option-icon"
            src={dotsIcon}
            alt="Иконка троеточия"
          />
        </div>
      </div>
    </div>
  );
}

TableRow.defaultProps = {
  useCheckbox: false,
  ambassadorData: {
    fullName: 'Не указано',
    trainingProgram: 'Не указано',
    status: 'Не указано',
    promoCode: 'Не указано',
    telegram: 'Не указано',
    dateAdded: 'Не указано',
    email: 'Не указано',
    phoneNumber: 'Не указано',
    contactMethod: 'Не указано',
    country: 'Не указано',
    city: 'Не указано',
    education: 'Не указано',
    workplaceAndPosition: 'Не указано',
    learningGoal: 'Не указано',
    plans: 'Не указано',
    blogLink: 'Не указано',
    clothingSize: 'Не указано',
    shoeSize: 0,
  },
};

TableRow.propTypes = {
  useCheckbox: PropTypes.bool,
  ambassadorData: PropTypes.shape({
    fullName: PropTypes.string,
    trainingProgram: PropTypes.string,
    status: PropTypes.string,
    promoCode: PropTypes.string,
    telegram: PropTypes.string,
    dateAdded: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    contactMethod: PropTypes.string,
    country: PropTypes.string,
    city: PropTypes.string,
    education: PropTypes.string,
    workplaceAndPosition: PropTypes.string,
    learningGoal: PropTypes.string,
    plans: PropTypes.string,
    blogLink: PropTypes.string,
    clothingSize: PropTypes.string,
    shoeSize: PropTypes.number,
  }),
};
