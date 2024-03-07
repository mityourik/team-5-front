import './TableSettings.scss';

function TableSettings() {
  // function onUserCreds() {
  //   console.log('onUserCreds');
  // }

  return (
    <div className="table-settings">
      <div className="table-settings__header">settings-header</div>
      <ul className="table-settings__list">
        <li
          className="table-settings__list-item"
          // onClick={onUserCreds}
        >
          ФИО
        </li>
        <li>
          toggle to be here
        </li>
      </ul>
      <button
        className="table-settings__button"
        type="button"
      >
        settings-button
      </button>
    </div>
  );
}

export default TableSettings;
