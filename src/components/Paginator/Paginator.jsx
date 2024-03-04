// import React from 'react';
// import PropTypes from 'prop-types';

import './Paginator.scss';
import DropdownButtonSelect from '../../UI/Buttons/DropdownButtons/DropdownButtonSelect/DropdownButtonSelect';
import PageButton from '../../UI/Buttons/PageButton/PageButton';

function Paginator() {
  const myOptions = ['Показывать по 25', 'Показывать по 50', 'Показывать по 100', 'Все'];
  const myOnSelect = () => { console.log('myOnSelect'); };
  const myPageNumber = 1;

  return (
    <footer className="footer">
      <DropdownButtonSelect
        options={myOptions}
        onSelect={myOnSelect}
        id="mySelectorId"
        selectedValue={myOptions.option1}
        placeholder={myOptions[0]}
      />
      <div className="page-buttons-wrap">
        <PageButton isArrowLeft label="" />
        <PageButton label={String(myPageNumber)} isActive />
        <PageButton label="2" />
        <PageButton label="3" />
        <PageButton label="&hellip;" />
        <PageButton label="15" />
        <PageButton isArrowRight label="" />
      </div>
    </footer>
  );
}

export default Paginator;
