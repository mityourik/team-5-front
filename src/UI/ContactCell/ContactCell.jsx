import PropTypes from 'prop-types';
import eyeIcon from './assets/eye.svg';
import eyeSlashedIcon from './assets/eye-slashed.svg';
import './ContactCell.scss';

function ContactCell({ contact, isHidden, type }) {
  const getIcon = () => (isHidden ? eyeSlashedIcon : eyeIcon);

  const formatContact = () => {
    if (isHidden) {
      if (type === 'email') {
        const parts = contact.split('@');
        const hiddenPart = parts[0].substring(1).replace(/./g, '*'); // hide all but the first character
        return `${contact[0]}${hiddenPart}@${parts[1]}`;
      } if (type === 'phone') {
        return contact.replace(/\d(?=\d{4})/g, '*'); // hide all but the last 4 digits
      }
    }
    return contact;
  };

  const iconSrc = getIcon();
  const altText = isHidden ? 'Hidden' : 'Visible';

  return (
    <div className="contact-cell">
      <img className="contact-cell__icon" src={iconSrc} alt={`${altText} ${type}`} />
      <p className="contact-cell__text">{formatContact()}</p>
    </div>
  );
}

ContactCell.propTypes = {
  contact: PropTypes.string.isRequired,
  isHidden: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['email', 'phone']).isRequired,
};

export default ContactCell;
