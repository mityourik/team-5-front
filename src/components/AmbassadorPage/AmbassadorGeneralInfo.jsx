import { useState } from 'react';
import AmbassadorSectionTitle from './AmbassadorSectionTitle';
import DropdownStatusSelect from '../../UI/Buttons/DropdownButtons/DropdownStatusSelect/DropdownStatusSelect';
import AmbassadorInfoTable from './AmbassadorInfoTable';
import './AmbassadorGeneralInfo.scss';

export default function AmbassadorGeneralInfo() {
  const [, setAmbassadorStatus] = useState(''); // ambassadorStatus
  const handleStatusSelect = (status) => {
    setAmbassadorStatus(status);
  };

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

  return (
    <section className="ambassador__info-container">
      <article className="ambassador__info">
        <AmbassadorSectionTitle title="Статус" />
        <DropdownStatusSelect onSelect={handleStatusSelect} />
      </article>
      <article className="ambassador__info">
        <AmbassadorSectionTitle title="Общие данные" />
        <AmbassadorInfoTable data={generalData} />
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
