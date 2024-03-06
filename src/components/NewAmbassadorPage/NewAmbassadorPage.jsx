import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  setIsNewAmbassadorAddingTrue,
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

  const handleCancelEditing = () => {
    // добавить модальное окно с уточнением выйти без сохранения изменений
    dispatch(!setIsNewAmbassadorAddingTrue());
    navigate('/');
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
              type="button"
            >
              Добавить
            </button>
          </div>
        </nav>
        <section className="ambassador-page__content">
          <AmbassadorPersInfo />
          <AmbassadorGeneralInfo />
        </section>
      </main>
    </HeaderSidebarLayout>
  );
}
