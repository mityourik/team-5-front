import { useDispatch, useSelector } from 'react-redux';
import {
  getIsAmbassadorDataEditing,
} from '../../services/selectors/ambassadorSelector';
import {
  setIsAmbassadorDataEditingTrue,
  setIsAmbassadorDataEditingFalse,
} from '../../services/slices/ambassadorSlice';
import goBackIcon from '../../assets/AmbassadorsPage/go-back-button-icon.svg';
import editIcon from '../../assets/AmbassadorsPage/Vector.svg';
import AmbassadorPersInfo from './AmbassadorPersInfo';
import './AmbassadorPage.scss';

export default function AmbassadorPage() {
  // const isAmbassadorDataEditing = useSelector(getIsAmbassadorDataEditing);
  // const isLoadingAmbassadorData = useSelector(getIsLoadingAmbassadorData);
  const isAmbassadorDataEditing = useSelector(getIsAmbassadorDataEditing);

  const dispatch = useDispatch();
  return (
    <main className="ambassador-page">
      <nav className="ambassador-page__nav">
        {!isAmbassadorDataEditing ? (
          // <nav className="ambassador-page__nav">
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
            <h3>Редактирование профиля амбассадора</h3>
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
                // onClick={() => {
                  // здесь будет запрос на сохранение данных
                // }}
              >
                Сохранить
              </button>
            </div>
          </>
        )}
      </nav>
      <section className="ambassador-page__content">
        <AmbassadorPersInfo />

      </section>
    </main>
  );
}
