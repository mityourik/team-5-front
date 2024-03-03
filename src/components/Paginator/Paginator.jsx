// import React from 'react';
import './Paginator.css';
import DropdownButtonSelect from '../../UI/Buttons/DropdownButtons/DropdownButtonSelect/DropdownButtonSelect';

function Paginator() {
  const myOptions = ['Показывать по 25', 'Показывать по 50', 'Показывать по 100', 'Все'];
  const myOnSelect = () => { console.log('myOnSelect'); };

  return (
    <footer className="footer">
      <DropdownButtonSelect
        options={myOptions}
        onSelect={myOnSelect}
        id="mySelectorId"
        selectedValue={myOptions.option1}
        placeholder={myOptions[0]}
      />
    </footer>
  );
}

export default Paginator;
