import React, { useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './TableContentGrid.scss';
import ContentLinkCell from '../../UI/ContentLinkCell/ContentLinkCell';
import DropdownButtonStatus from '../../UI/Buttons/DropdownButtonStatus/DropdownButtonStatus';
import ContentLinkCellAfterGuide from '../../UI/ContentLinkCellAfterGuide/ContentLinkCellAfterGuide';
import { fetchContent } from '../../services/thunks/ambassadorThunk';

function TableContentGrid({ searchTerm }) {
  const dispatch = useDispatch();
  const ambassadorsList = useSelector((state) => state.ambassador.ambassadorList);

  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  // const handleDeleteLink = (contentId, ambassadorName, contentTypeTitle) => {
  //   console.log('Удаление ссылки из контента', contentId, ambassadorName, contentTypeTitle);
  // };

  // const handleStatusChange = async (selectedValue, ambassadorName, contentTypeTitle) => {
  //   setAmbassadorsContent((currentContent) => currentContent.map((ambassador) => {
  //     if (ambassador.ambassadorName === ambassadorName) {
  //       return {
  //         ...ambassador,
  //         contentTypes: ambassador.contentTypes.map((contentType) => {
  //           if (contentType.title === contentTypeTitle) {
  //             return { ...contentType, status: selectedValue };
  //           }
  //           return contentType;
  //         }),
  //       };
  //     }
  //     return ambassador;
  //   }));
  // };

  // Заглушка для функции удаления ссылки
  const handleDeleteLink = (contentId, ambassadorName, contentTypeTitle) => {
    console.log('Удаление ссылки из контента', contentId, ambassadorName, contentTypeTitle);
  };

  // Заглушка для функции изменения статуса
  const handleStatusChange = (selectedValue, ambassadorName, contentTypeTitle) => {
    console.log('Изменение статуса контента', selectedValue, ambassadorName, contentTypeTitle);
  };

  const filteredContent = useMemo(() => (Array.isArray(ambassadorsList)
    // eslint-disable-next-line max-len
    ? ambassadorsList.filter((ambassador) => ambassador.ambassadorName.toLowerCase().includes(searchTerm.toLowerCase()))
    : []), [ambassadorsList, searchTerm]);

  return (
    <div className="table-content-grid-wrapper">
      <div className="table-content-grid">
        <div className="table-content-grid__header">
          <div className="table-content-grid__column">ФИО амбассадора</div>
          <div className="table-content-grid__column">Первый отзыв</div>
          <div className="table-content-grid__column">Статус</div>
          <div className="table-content-grid__column">Гайд</div>
          <div className="table-content-grid__column">Статус</div>
          <div className="table-content-grid__column">После Гайда</div>
        </div>
        {filteredContent.map((ambassador) => (
          <div key={ambassador.ambassadorName} className="table-content-grid__row">
            <div className="table-content-grid__cell">{ambassador.ambassadorName}</div>
            {ambassador.contentTypes.map((type) => (
              <React.Fragment key={`${ambassador.ambassadorName}-${type.title}`}>
                <div className="table-content-grid__cell">
                  {type.contents.map((content) => (
                    <div key={content.id} className="table-content-grid__review-item">
                      {type.title === 'Первый отзыв' || type.title === 'Гайд' ? (
                        <ContentLinkCell
                          content={content}
                          ambassadorName={ambassador.ambassadorName}
                          contentTypeTitle={type.title}
                          handleDeleteLink={handleDeleteLink}
                        />
                      ) : (
                        <ContentLinkCellAfterGuide
                          content={content}
                          ambassadorName={ambassador.ambassadorName}
                          contentTypeTitle={type.title}
                          handleDeleteLink={handleDeleteLink}
                        />
                      )}
                    </div>
                  ))}
                </div>
                {type.title !== 'После гайда' && (
                <div
                  className="table-content-grid__cell"
                >
                  <DropdownButtonStatus
                    onSelect={(selectedValue) => handleStatusChange(
                      selectedValue,
                      ambassador.ambassadorName,
                      type.title,
                    )}
                    id={`dropdown-${ambassador.ambassadorName}-${type.title}`}
                    selectedValue={type.status}
                    placeholder="Выберите статус"
                    className={
                      type.status === 'Выполнено'
                        ? 'status-completed'
                        : 'status-not-completed'
                      }
                  />
                </div>
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

TableContentGrid.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default TableContentGrid;
