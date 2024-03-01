import { useState } from 'react';
import './FilterMailingBtn.scss';
import PropTypes from 'prop-types';

function FilterMailingBtn({
  onClick,
  backgroundImage,
  backgroundImageHover,
  backgroundImageActive,
  backgroundImageFocus,
  text,
  children,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const buttonStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  if (isHovered) {
    buttonStyle.backgroundImage = `url(${backgroundImageHover})`;
  }

  if (isActive) {
    buttonStyle.backgroundImage = `url(${backgroundImageActive})`;
  }

  if (isFocused) {
    buttonStyle.backgroundImage = `url(${backgroundImageFocus})`;
    buttonStyle.borderColor = '#5A9BFF';
    buttonStyle.backgroundColor = '#5A9BFF';
  }

  return (
    <button
      className="filter-button"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={buttonStyle}
      type="button"
    >
      <span className="filter-button__span" style={{ color: isFocused || isHovered || isActive ? '#FFF' : '#1D6BF3' }}>
        {text}
      </span>
      {children}
    </button>
  );
}

FilterMailingBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  backgroundImage: PropTypes.string,
  backgroundImageHover: PropTypes.string,
  backgroundImageActive: PropTypes.string,
  backgroundImageFocus: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
};

FilterMailingBtn.defaultProps = {
  backgroundImage: '../AmbFilterButton/assets/AmbFilterButtonImg.svg',
  backgroundImageHover: './assets/AmbFilterBtnHover.svg',
  backgroundImageActive: './assets/AmbFilterBtnHover.svg',
  backgroundImageFocus: './assets/AmbFilterBtnHover.svg',
  text: 'Фильтры',
  children: null,
};

export default FilterMailingBtn;
