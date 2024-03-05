// import { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { useSelector } from 'react-redux';
import {
  getIsAmbassadorDataEditing,
  // getIsLoadingAmbassadorData,
  // getAmbassadorData,
} from '../../services/selectors/ambassadorSelector';
// import { fetchGetStudyProgramms } from '../../services/thunks/dropdownThunk';
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
  const options = ['List item', 'UI/UX дизайнер', 'List item1', 'List item2', 'List item3', 'List item4', 'List item5', 'List item6', 'List item7'];
  // useEffect(() => {
  //   dispatch(fetchGetStudyProgramms());
  // }, [dispatch]);
  // const options = useSelector((state) => state.dropdown.studyProgramms);
  const isAmbassadorDataEditing = useSelector(getIsAmbassadorDataEditing);

  return (
    <article className="ambassador-page__data">
      {isAmbassadorDataEditing ? (
        <>
          <Formik
            initialValues={{
              name: 'Василий Васильевич Пупкин',
            }}
            // onSubmit={handleSubmit}
            // validate={validate}
          >
            {() => (
              <Form>
                <InputName name="name" />
                <Field
                  name="dropdownValue"
                >
                  {({ field }) => (
                    <DropdownField
                      // eslint-disable-next-line react/jsx-props-no-spreading
                      {...field}
                      // inputId="dropdownValue"
                      labelText="Программа обучения"
                      options={options}
                      htmlFor="dropdownValue"
                      selectedValue="UI/UX дизайнер"
                    />
                  )}
                </Field>
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
