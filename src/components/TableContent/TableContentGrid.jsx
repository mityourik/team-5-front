import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TableContentGrid.scss';
import ContentLinkCell from '../../UI/ContentLinkCell/ContentLinkCell';
import DropdownButtonStatus from '../../UI/Buttons/DropdownButtonStatus/DropdownButtonStatus';
import ContentLinkCellAfterGuide from '../../UI/ContentLinkCellAfterGuide/ContentLinkCellAfterGuide';

function TableContentGrid() {
  const [ambassadorsContent, setAmbassadorsContent] = useState([]);

  useEffect(() => {
    const fetchContent = async () => {
      const apiUrl = 'http://89.111.174.233/api/content';
      const token = 'Token 9eb4012798c9638ff7c1c75de773ac02e7233734';
      try {
        const response = await axios.get(apiUrl, {
          headers: { Authorization: token },
        });
        setAmbassadorsContent(response.data.results);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchContent();
  }, []);

  const handleDeleteLink = (contentId, ambassadorName, contentTypeTitle) => {
    console.log('Удаление ссылки из контента', contentId, ambassadorName, contentTypeTitle);
  };

  //   const handleDeleteLink = async (contentId, ambassadorName, contentTypeTitle) => {
  //     const deleteUrl = `http://89.111.174.233/api/content/${contentId}`;
  //     const token = 'Token 9eb4012798c9638ff7c1c75de773ac02e7233734';
  //     try {
  //       await axios.delete(deleteUrl, {
  //         headers: { Authorization: token },
  //       });
  //       setAmbassadorsContent((currentContent) => currentContent.map((ambassador) => {
  //         if (ambassador.ambassadorName === ambassadorName) {
  //           return {
  //             ...ambassador,
  //             contentTypes: ambassador.contentTypes.map((contentType) => {
  //               if (contentType.title === contentTypeTitle) {
  //                 // Удаляем контент из списка
  //                 return {
  //                   ...contentType,
  //                   contents: contentType.contents.filter((content) => content.id !== contentId),
  //                 };
  //               }
  //               return contentType;
  //             }),
  //           };
  //         }
  //         return ambassador;
  //       }));
  //     } catch (error) {
  //       console.error('Ошибка при удалении ссылки:', error);
  //     }
  //   };

  const handleStatusChange = async (selectedValue, ambassadorName, contentTypeTitle) => {
    setAmbassadorsContent((currentContent) => currentContent.map((ambassador) => {
      if (ambassador.ambassadorName === ambassadorName) {
        return {
          ...ambassador,
          contentTypes: ambassador.contentTypes.map((contentType) => {
            if (contentType.title === contentTypeTitle) {
              return { ...contentType, status: selectedValue };
            }
            return contentType;
          }),
        };
      }
      return ambassador;
    }));
  };

  return (
    <div className="table-content-grid">
      <div className="table-content-grid__header">
        <div className="table-content-grid__column">ФИО амбассадора</div>
        <div className="table-content-grid__column">Первый отзыв</div>
        <div className="table-content-grid__column">Статус</div>
        <div className="table-content-grid__column">Гайд</div>
        <div className="table-content-grid__column">Статус</div>
        <div className="table-content-grid__column">После Гайда</div>
      </div>
      {ambassadorsContent.map((ambassador) => (
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
  );
}

export default TableContentGrid;
