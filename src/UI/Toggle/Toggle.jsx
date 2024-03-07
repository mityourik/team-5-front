import './Toggle.scss';
import PropTypes from 'prop-types';

function Toggle(props) {
  const {
    label, isActive, onChange, id,
  } = props;
  return (
    <>
      <div className="toggle">
        <label className="switch" htmlFor={id}>
          {label}
          <input
            onChange={onChange}
            type="checkbox"
            id={id}
            checked={isActive}
          />
          <span className="slider" />
        </label>
      </div>
      {/* <div className="movies__toggle-wrap">
        <label className="switch" htmlFor="switch">
          <input
            onChange={onChange}
            type="checkbox"
            id="switch"
            checked={isShort}
          />
          <span className="slider round" />
        </label>
        <span className="movies__toggle-label">Короткометражки</span>
      </div> */}
      <label className="auth__input-label text-class" htmlFor="qwerty">
        лейбак
        <input
          className="auth__input auth__input-password"
          id="qwerty"
        />
      </label>
    </>
  );
}

export default Toggle;

Toggle.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
