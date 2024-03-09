// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getIsAmbassadorDataEditing,
  getIsNewAmbassadorAdding,
} from '../../services/selectors/ambassadorSelector';
import {
  setIsAmbassadorDataEditingTrue,
  setIsAmbassadorDataEditingFalse,
} from '../../services/slices/ambassadorSlice';
import HeaderSidebarLayout from '../LayoutHeaderSidebar/HeaderSidebarLayout';
import goBackIcon from '../../assets/AmbassadorsPage/go-back-button-icon.svg';
import editIcon from '../../assets/AmbassadorsPage/edit-button-icon.svg';
import AmbassadorPersInfo from './AmbassadorPersInfo';
import AmbassadorGeneralInfo from './AmbassadorGeneralInfo';
import './AmbassadorPage.scss';

export default function AmbassadorPage() {
  const isAmbassadorDataEditing = useSelector(getIsAmbassadorDataEditing);
  const isNewAmbassadorAdding = useSelector(getIsNewAmbassadorAdding);

  // const [isOpen, setIsOpen] = useState(false);

  // const handleMouseEnter = () => setIsOpen(true);
  // const handleMouseLeave = () => setIsOpen(false);

  const dispatch = useDispatch();
  return (
    <HeaderSidebarLayout>
      <main className="ambassador-page">
        <nav className="ambassador-page__nav">
          {!isAmbassadorDataEditing && !isNewAmbassadorAdding ? (
            <>
              <button
                className="go-back-button"
                type="button"
              >
                <img className="ambassador-page__icon" alt="Иконка со стрелкой влево - переход назад" src={goBackIcon} />
                Назад
              </button>
              <button
                className="ambassador-page__edit-button"
                type="button"
                onClick={() => {
                  dispatch(setIsAmbassadorDataEditingTrue());
                }}
              >
                <img className="ambassador-page__icon edit" alt="Иконка с карандашом - редактирование данных" src={editIcon} />
                Редактировать
              </button>
            </>
          ) : (
            <>
              <h3 className="ambassador-page__title">Редактирование профиля амбассадора</h3>
              <div className="ambassador-page__button-container">
                <button
                  className="ambassador-page__decline-button"
                  type="button"
                  onClick={() => {
                    dispatch(setIsAmbassadorDataEditingFalse());
                  }}
                >
                  Отменить
                </button>
                <button
                  className="ambassador-page__save-button"
                  type="button"
                >
                  Сохранить
                </button>
              </div>
            </>
          )}
        </nav>
        <section className="ambassador-page__content">
          <AmbassadorPersInfo />
          <AmbassadorGeneralInfo />
        </section>
      </main>
    </HeaderSidebarLayout>
  );
}
