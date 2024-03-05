import PropTypes from 'prop-types';
import tgIcon from '../../assets/TelegramIcon.svg';

export default function TelegramCell({ nickname }) {
  return (
    <div className="сell">
      <img className="cell__icon" src={tgIcon} alt="Иконка телеграмма" />
      <p className="сell__text">{nickname || 'Не указан телеграм'}</p>
    </div>
  );
}

TelegramCell.propTypes = {
  nickname: PropTypes.string.isRequired,
};
