import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  setIsNewAmbassadorAddingTrue,
  setIsNewAmbassadorAddingFalse,
} from '../../services/slices/ambassadorSlice';
// import { getIsNewAmbassadorAdding } from '../../services/selectors/ambassadorSelector';
import HeaderSidebarLayout from '../LayoutHeaderSidebar/HeaderSidebarLayout';
import AmbassadorPersInfo from '../AmbassadorPage/AmbassadorPersInfo';
import AmbassadorGeneralInfo from '../AmbassadorPage/AmbassadorGeneralInfo';
import '../AmbassadorPage/AmbassadorPage.scss';

export default function NewAmbassadorPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setIsNewAmbassadorAddingTrue());
  });

  const handleSaveSubmit = () => {
    // dispatch(setIsNewAmbassadorAddingFalse());
    // navigate('/ambassadors');
    console.log('Save OK');
  };

  const handleCancelEditing = () => {
    // добавить модальное окно с уточнением выйти без сохранения изменений
    dispatch(setIsNewAmbassadorAddingFalse());
    navigate('/ambassadors');
  };

  return (

    <HeaderSidebarLayout>
      <main className="ambassador-page">
        <nav className="ambassador-page__nav">
          <h3 className="ambassador-page__title">Добавление нового амбассадора</h3>
          <div className="ambassador-page__button-container">
            <button
              className="ambassador-page__decline-button"
              type="button"
              onClick={handleCancelEditing}
            >
              Отменить
            </button>
            <button
              className="ambassador-page__save-button"
              type="submit"
              onClick={handleSaveSubmit}
            >
              Добавить
            </button>
          </div>
        </nav>
        <section className="ambassador-page__content">
          <AmbassadorPersInfo handleSubmit={handleSaveSubmit} />
          <AmbassadorGeneralInfo handleSubmit={handleSaveSubmit} />
        </section>
      </main>
    </HeaderSidebarLayout>
  );
}
