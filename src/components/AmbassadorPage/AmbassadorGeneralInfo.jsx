import AmbassadorSectionTitle from './AmbassadorSectionTitle';
import DropdownButton1 from '../../UI/Buttons/DropdownButton1/DropdownButton1';
import AmbassadorInfoTable from './AmbassadorInfoTable';
// import {getIsAmbassadorDataEdit ing } from '../../services/selectors/ambassadorSelector';
import './AmbassadorGeneralInfo.scss';

export default function AmbassadorGeneralInfo() {
//   const isAmbassadorDataEditing = useSelector(getIsAmbassadorDataEditing);

  const generalData = [
    { label: 'Промокод', value: 'VASYAPUPKIN' },
    { label: 'Цель обучения', value: 'Смена профессии' },
    { label: 'Куратор', value: 'Анастасия Борисова' },
    { label: 'Что хочет делать', value: 'Вести блог, Писать статьи, Снимать видео или сниматься в них, если продакшн будет на нашей стороне' },
    { label: 'Образование', value: 'СПБГУПТД' },
    { label: 'Место работы ', value: 'Безработный дизайнер ' },
  ];

  const adresses = [
    { label: 'Страна', value: 'Россия' },
    { label: 'Город', value: 'Санкт-Петербург' },
    { label: 'Индекс', value: '190000' },
    { label: 'Адрес', value: 'Университетская наб., 3' },
  ];

  const merch = [
    { label: 'Пол', value: 'Мужской' },
    { label: 'Размер одежды', value: 'M' },
    { label: 'Размер ноги', value: '40' },
  ];

  const menuOptions = [
    {
      label: 'Активный',
      action: () => console.log('Добавление вручную'),
    },
    {
      label: 'Уточняется ',
      action: () => console.log(' '),
    },
  ];

  return (
    <section className="ambassador__info-container">
      <article className="ambassador__info">
        <AmbassadorSectionTitle title="Статус" />
        <DropdownButton1 buttonLabel="Активный" menuOptions={menuOptions} btnClassName="ambassador__status-btn" />
      </article>
      <article className="ambassador__info">
        <AmbassadorSectionTitle title="Общие данные" />
        <AmbassadorInfoTable data={generalData} />
        {/* {isAmbassadorDataEditing ? () : () } */}
      </article>
      <article className="ambassador__info">
        <AmbassadorSectionTitle title="Адрес" />
        <AmbassadorInfoTable data={adresses} />
      </article>
      <article className="ambassador__info">
        <AmbassadorSectionTitle title="Мерч" />
        <AmbassadorInfoTable data={merch} />
      </article>
      <article className="ambassador__info">
        <AmbassadorSectionTitle title="Комментарий" />
        <p className="ambassador__comment">Я готов на все ради мерча </p>
      </article>
    </section>
  );
}
