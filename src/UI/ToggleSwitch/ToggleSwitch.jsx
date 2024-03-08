import './ToggleSwitch.scss';
import PropTypes from 'prop-types';

function ToggleSwitch(props) {
  const {
    label, id, isToggled, setIsToggled,
  } = props;

  const handleToggle = () => setIsToggled(!isToggled);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleToggle();
    }
  };

  return (
    <div className="toggle-container">
      <label htmlFor={id} className="toggle-label">{label}</label>
      <div
        className="toggle-switch"
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex="0"
        aria-pressed={isToggled}
        aria-labelledby={label} // Указываем, что label служит описанием для этого "кнопочного" div
      >
        <input
          className="toggle-checkbox"
          type="checkbox"
          id={id}
          checked={isToggled}
          onChange={() => {}}
          readOnly
          aria-hidden="true" // Скрываем от читалок, т.к. состояние управляется div с role="button"
        />
        <span className="toggle-slider" />
      </div>
    </div>
  );
}

ToggleSwitch.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isToggled: PropTypes.bool,
  setIsToggled: PropTypes.func.isRequired,
};

ToggleSwitch.defaultProps = {
  isToggled: true,
};

export default ToggleSwitch;
