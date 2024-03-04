import { useState } from 'react';
import PropTypes from 'prop-types';
import TableCheckbox from '../TableCheckbox/TableCheckbox';
import TelegramCell from '../TelegramCell/TelegramCell';
import dotsIcon from '../../assets/three-dots-vertical.svg';

export default function TableRow({ useCheckbox }) {
  const [count] = useState(1);
  return (
    <div className="row">
      {useCheckbox ? <TableCheckbox count={count} /> : ''}
      <div className="row__container">
        <div className="row__name">
          <p className="row__name-text">Константин</p>
        </div>
        <div className="row__name">
          <p className="row__name-text">Константин</p>
        </div>
        <div className="row__name">
          <p className="row__name-text">Константин</p>
        </div>
        <div className="row__name">
          <p className="row__name-text">Константин</p>
        </div>
        <div className="row__name">
          <TelegramCell />
        </div>
        <div className="row__name">
          <TelegramCell />
        </div>
        <div className="row__name">
          <TelegramCell />
        </div>
        <div className="row__name">
          <TelegramCell />
        </div>
        <div className="row__name">
          <p className="row__name-text">Константин</p>
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
};

TableRow.propTypes = {
  useCheckbox: PropTypes.bool,
};
