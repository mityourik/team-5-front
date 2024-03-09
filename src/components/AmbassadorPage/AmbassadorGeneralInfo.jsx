import { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getAmbassadorData, getIsAmbassadorDataEditing, getIsNewAmbassadorAdding } from '../../services/selectors/ambassadorSelector';
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

export default function AmbassadorGeneralInfo({ handleSubmit }) {
  const isAmbassadorDataEditing = useSelector(getIsAmbassadorDataEditing);
  const isNewAmbassadorAdding = useSelector(getIsNewAmbassadorAdding);
  const ambassadorData = useSelector(getAmbassadorData);

  const [, setAmbassadorStatus] = useState(ambassadorData.status || ''); // ambassadorStatus
  const handleStatusSelect = (status) => {
    setAmbassadorStatus(status);
  };

  const generalData = [
    { label: 'Промокод', value: ambassadorData.promocode || 'VASYAPUPKIN' },
    { label: 'Цель обучения', value: ambassadorData.aim || 'Смена профессии' },
    { label: 'Куратор', value: ambassadorData.supervisor || 'Анастасия Борисова' },
    { label: 'Что хочет делать', value: ambassadorData.want_to_do || 'Вести блог, Писать статьи, Снимать видео или сниматься в них, если продакшн будет на нашей стороне' },
    { label: 'Образование', value: ambassadorData.education || 'СПБГУПТД' },
    { label: 'Место работы ', value: ambassadorData.job || 'Безработный дизайнер' },
  ];

  const adresses = [
    { label: 'Страна', value: ambassadorData.country || 'Россия' },
    { label: 'Город', value: ambassadorData.city || 'Санкт-Петербург' },
    { label: 'Индекс', value: ambassadorData.zip_code || '190000' },
    { label: 'Адрес', value: ambassadorData.address || 'Университетская наб., 3' },
  ];

  const merch = [
    { label: 'Пол', value: ambassadorData.gender || 'Мужской' },
    { label: 'Размер одежды', value: ambassadorData.shirt_size || 'M' },
    { label: 'Размер ноги', value: ambassadorData.shoes_size || '40' },
  ];

  const cities = [
    ambassadorData.city,
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
    { goal: ambassadorData.want_to_do },
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
    { label: ambassadorData.aim, value: ambassadorData.aim },
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
        <AmbassadorInfoTable data={generalData} handleSubmit={handleSubmit}>
          {isAmbassadorDataEditing || isNewAmbassadorAdding ? (
            <>
              <InputText label="Промокод" name="promocode" placeholder="Введите промокод" />
              <DropdownCombobox labelText="Цель обучения" purposes={purposes} />
              <InputText label="Куратор" name="curator" placeholder="Введите имя и фамилию куратора" />
              <DropdownMultiselect labelText="Что хочет делать" goals={goals} />
              <InputText label="Образование" name="education" placeholder="Введите образование" />
              <InputText label="Место работы" name="placeOfWork" placeholder="Введите место работы, должность" />
            </>
          ) : null}
        </AmbassadorInfoTable>
      </article>
      <article className="ambassador__info">
        <AmbassadorSectionTitle title="Адрес" />
        <AmbassadorInfoTable data={adresses} handleSubmit={handleSubmit}>
          {isAmbassadorDataEditing || isNewAmbassadorAdding ? (
            <>
              <DropdownField htmlFor="country" labelText="Страна" options={countries} />
              <DropdownField htmlFor="city" labelText="Город" options={cities} selectedValue="Санкт-Петербург" />
              <InputText label="Индекс" name="index" placeholder="Введите индекс" />
              <InputText label="Адрес" name="address" placeholder="Введите  адрес проживания" />
            </>
          ) : null}
        </AmbassadorInfoTable>
      </article>
      <article className="ambassador__info">
        <AmbassadorSectionTitle title="Мерч" />
        <AmbassadorInfoTable data={merch} handleSubmit={handleSubmit}>
          {isAmbassadorDataEditing || isNewAmbassadorAdding ? (
            <>
              <RadioButton labelText="Пол" inputId="gender" values={['Мужской', 'Женский']} initialValues={ambassadorData.gender} />
              <DropdownField htmlFor="clothingSize" labelText="Размер одежды" options={clothingSizes} selectedValue={ambassadorData.shirt_size} />
              <InputText label="Размер ноги" name="shoeSize" placeholder="Введите размер ноги" />
            </>
          ) : null}
        </AmbassadorInfoTable>
      </article>
      <article className="ambassador__info">
        <AmbassadorSectionTitle title="Комментарий" />
        {isAmbassadorDataEditing || isNewAmbassadorAdding ? (
          <AmbassadorInfoTable handleSubmit={handleSubmit}>
            <InputText label="" name="comment" placeholder="Введите комментарий" />
          </AmbassadorInfoTable>
        ) : (
          <p className="ambassador__comment">{ambassadorData.comment || 'Я готов на все ради мерча'}</p>
        )}
      </article>
    </section>
  );
}

AmbassadorGeneralInfo.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
