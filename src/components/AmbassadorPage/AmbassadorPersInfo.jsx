// import { useEffect } from 'react';
import { Formik, Form } from 'formik';
import { useSelector } from 'react-redux';
import {
  getIsAmbassadorDataEditing,
  // getIsLoadingAmbassadorData,
  // getAmbassadorData,
} from '../../services/selectors/ambassadorSelector';
// import { getAmbassadorInfo } from '../../services/thunks/ambassadorThunk';
import AmbassadorSectionTitle from './AmbassadorSectionTitle';
import InputName from '../../Inputs/InputName';
import DropdownField from '../../Inputs/DropdownField';
import InputEmail from '../../Inputs/InputEmail';
import InputPhoneNumber from '../../Inputs/InputPhoneNumber';
import InputWebsite from '../../Inputs/InputWebsite';
// импорт иконок для кнопок
import emailIcon from '../../assets/AmbassadorsPage/email-icon.svg';
import phoneIcon from '../../assets/AmbassadorsPage/phone-icon.svg';
import tgIcon from '../../assets/AmbassadorsPage/telegram-icon.svg';
import linkIcon from '../../assets/AmbassadorsPage/link-icon.svg';
import messageIcon from '../../assets/AmbassadorsPage/message-button-icon.svg';
import './AmbassadorPage.scss';

export default function AmbassadorPersInfo() {
  // const dispatch = useDispatch();

  const isAmbassadorDataEditing = useSelector(getIsAmbassadorDataEditing);
  // const isLoadingAmbassadorData = useSelector(getIsLoadingAmbassadorData);
  // const ambassador = useSelector(getAmbassadorData);

  // useEffect(() => {
  //   dispatch(getAmbassadorInfo());
  // }, [dispatch]);

  return (
    <article className={`ambassador-page__data ${isAmbassadorDataEditing && 'ambassador-page__data_editing'}`}>
      {isAmbassadorDataEditing ? (
        <>
          <Formik
            initialValues={{
              name: 'Василий Васильевич Пупкин',
              education: 'UI/UX дизайнер',
            }}
            // onSubmit={handleSubmit}
            // validate={validate}
          >
            {() => (
              <Form>
                <InputName name="name" />
                <DropdownField
                  inputId="education"
                  labelText="Программа обучения"
                  ddClassName="select-education"
                >
                  <option className="select-option" value="">Выберите из списка</option>
                  <option className="select-option" value="UI/UX дизайнер">UI/UX дизайнер</option>
                  <option className="select-option" value="Продакт-менеджер для специалистов с опытом">Продакт-менеджер для специалистов с опытом</option>
                </DropdownField>
              </Form>
            )}
          </Formik>
          <AmbassadorSectionTitle title="Контакты" />
          <Formik
            initialValues={{
              email: 'vladimir@gmail.com',
              phone: '+7 999 211 01 01',
              telegram_handle: '@telega',
              blog_url: 'pupkinmadeontilda.com',
            }}
            // className="ambassador-page__info"
            // onSubmit={handleSubmit}
            // validate={validate}
          >
            {() => (
              <Form className="ambassador-page__info-form">
                <InputEmail />
                <InputPhoneNumber />
                <InputName name="telegram_handle" />
                <InputWebsite />
              </Form>
            )}
          </Formik>
        </>
      ) : (
        <>
          <div className="ambassador-page__info">
            <h2 className="ambassador-page__name">Василий Васильевич Пупкин</h2>
            {/* <h2 className="ambassador-page__name">{ambassador?.name}</h2> */}
            <p className="ambassador-page__position">UI/UX дизайнер</p>
          </div>
          <div className="ambassador-page__info">
            <AmbassadorSectionTitle title="Контакты" />
            <ul className="ambassador-page__contacts-list">
              <li className="ambassador-page__contacts-item">
                <img className="ambassador-page__icon" alt="Иконка несколько конвертов" src={emailIcon} />
                vladimir@gmail.com
              </li>
              <li className="ambassador-page__contacts-item">
                <img className="ambassador-page__icon" alt="Иконка с трубкой телефона" src={phoneIcon} />
                +7 999 211 01 01
                {/* {ambassador?.phone} */}
              </li>
              <li className="ambassador-page__contacts-item">
                <img className="ambassador-page__icon" alt="Иконка с бумажным самолетиком" src={tgIcon} />
                &#64;telega
                {/* {ambassador?.telegram_handle} */}
              </li>
              <li className="ambassador-page__contacts-item website">
                <img className="ambassador-page__icon" alt="Иконка со скрепкой" src={linkIcon} />
                <a
                  className="ambassador-page__contacts-link"
                  href="{ambassador?.blog_url}"
                  target="_blank"
                  rel="noreferrer"
                >
                  pupkinmadeontilda.com
                  {/* {ambassador?.blog_url} */}
                </a>
              </li>
            </ul>
          </div>
          <button
            className="ambassador-page__contact-button"
            type="button"
          >
            <img className="ambassador-page__icon" alt="Иконка с конвертиком" src={messageIcon} />
            Написать
          </button>
        </>
      )}
    </article>
  );
}
