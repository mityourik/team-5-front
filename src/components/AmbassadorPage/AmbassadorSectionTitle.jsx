import PropTypes from 'prop-types';
import './AmbassadorSectionTitle.scss';

export default function AmbassadorGeneralInfo({ title }) {
  return (
    <h3 className="ambassador-page__contacts">{title}</h3>
  );
}

AmbassadorGeneralInfo.propTypes = {
  title: PropTypes.string.isRequired,
};
