import './MailingButton.scss';
import PropTypes from 'prop-types';

function MailingButton({
  onClick,
  text,
  children,
}) {
  return (
    <button
      className="mailing-button"
      onClick={onClick}
      type="button"
    >
      <span className="mailing-button__span">
        {text}
      </span>
      {children}
    </button>
  );
}

MailingButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  children: PropTypes.node,
};

MailingButton.defaultProps = {
  text: 'Фильтры',
  children: null,
};

export default MailingButton;
