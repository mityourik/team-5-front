import settingsIcon from '../../assets/settings.svg';

export default function TableSettings() {
  return (
    <th className='settings-container'>
      <img
        className='settings-container__icon'
        src={settingsIcon}
        alt='Иконка шестеренки'
      />
    </th>
  );
}
