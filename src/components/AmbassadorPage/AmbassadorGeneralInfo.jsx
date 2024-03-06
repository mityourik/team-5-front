import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsAmbassadorDataEditing } from '../../services/selectors/ambassadorSelector';
import AmbassadorSectionTitle from './AmbassadorSectionTitle';
import DropdownStatusSelect from '../../UI/Buttons/DropdownButtons/DropdownStatusSelect/DropdownStatusSelect';
import DropdownCombobox from '../../UI/Buttons/DropdownButtons/DropdownCombobox/DropdownCombobox';
import DropdownMultiselect from '../../UI/Buttons/DropdownButtons/DropdownMultiselect/DropdownMultiselect';
import AmbassadorInfoTable from './AmbassadorInfoTable';
import InputText from '../../Inputs/InputText';
import DropdownField from '../../Inputs/DropdownField';
import { countries } from '../../utils/countries'; // будет подгружаться из АПИ?
import RadioButton from '../../UI/Buttons/RadioButton/RadioButton';
import './AmbassadorGeneralInfo.scss';

export default function AmbassadorGeneralInfo() {
  const isAmbassadorDataEditing = useSelector(getIsAmbassadorDataEditing);
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

  const cities = [
    'Москва',
    'Санкт-Петербург',
    'Екатеринбург',
    'Нижний Новгород',
    'Казань',
    'Омск',
    'Самара',
    'Ростов-на-Дону',
    'Уфа',
    'Саратов',
    'Тольятти',
    'Ставрополь',
    'Тюмень',
  ];

  const goals = [
    { goal: 'Развивать локальное  провессиональное сообщество в своем городе' },
    { goal: 'Вести блог' },
    { goal: 'Писать статьи' },
    { goal: 'Снимать видео или сниматься в них, если продакшн будет на нашей стороне' },
    { goal: 'Знакомить коллег на работе с продуктом Практикума через различные форматы' },
    { goal: 'Вести книгу' },
    { goal: 'Писать статьи' },
    { goal: 'Снимать видео или сниматься в них, если продакшн будет на нашей стороне' },
  ];

  const purposes = [
    { label: 'Смена профессии', value: 'Смена профессии' },
    { label: 'Углубление имеющихся знаний', value: 'Углубление имеющихся знаний' },
    { label: 'Смена профессии', value: 'Смена профессии' },
  ];

  const clothingSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

  return (
    <section className="ambassador__info-container">
      <article className="ambassador__info">
        <AmbassadorSectionTitle title="Статус" />
        <DropdownStatusSelect onSelect={handleStatusSelect} />
      </article>
      <article className="ambassador__info">
        <AmbassadorSectionTitle title="Общие данные" />
        <AmbassadorInfoTable data={generalData}>
          {isAmbassadorDataEditing && (
            <>
              <InputText label="Промокод" name="promocode" />
              <DropdownCombobox labelText="Цель обучения" purposes={purposes} />
              <InputText label="Куратор" name="curator" />
              <DropdownMultiselect labelText="Что хочет делать" goals={goals} />
              <InputText label="Образование" name="education" />
              <InputText label="Место работы" name="placeOfWork" />
            </>
          )}
        </AmbassadorInfoTable>
      </article>
      <article className="ambassador__info">
        <AmbassadorSectionTitle title="Адрес" />
        <AmbassadorInfoTable data={adresses}>
          {isAmbassadorDataEditing && (
            <>
              <DropdownField htmlFor="country" labelText="Страна" options={countries} selectedValue="Россия" />
              <DropdownField htmlFor="city" labelText="Город" options={cities} selectedValue="Санкт-Петербург" />
              <InputText label="Индекс" name="index" />
              <InputText label="Адрес" name="address" />
            </>
          )}
        </AmbassadorInfoTable>
      </article>
      <article className="ambassador__info">
        <AmbassadorSectionTitle title="Мерч" />
        <AmbassadorInfoTable data={merch}>
          {isAmbassadorDataEditing && (
            <>
              <RadioButton labelText="Пол" inputId="gender" values={['Мужской', 'Женский']} initialValues="Мужской" />
              <DropdownField htmlFor="clothingSize" labelText="Размер одежды" options={clothingSizes} selectedValue="M" />
              <InputText label="Размер ноги" name="shoeSize" />
            </>
          )}
        </AmbassadorInfoTable>
      </article>
      <article className="ambassador__info">
        <AmbassadorSectionTitle title="Комментарий" />
        {isAmbassadorDataEditing ? (
          <AmbassadorInfoTable>
            <InputText label="" name="comment" />
          </AmbassadorInfoTable>
        ) : (
          <p className="ambassador__comment">Я готов на все ради мерча </p>
        )}
      </article>
    </section>
  );
}
