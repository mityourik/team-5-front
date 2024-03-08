import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TableContent.scss';
import DropdownButtonStatus from '../../UI/Buttons/DropdownButtonStatus/DropdownButtonStatus';

function TableContent() {
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

  function getServiceNameFromURL(url) {
    const parsedUrl = new URL(url);
    const { hostname } = parsedUrl;

    const serviceNames = {
      't.me': 'telegram',
      'habr.com': 'habr',
      'youtube.com': 'youtube',
      'linkedin.com': 'linkedIn',
      'twitter.com': 'twitter',
      // добавить надо еще
    };

    return serviceNames[hostname] || hostname;
  }

  return (
    <div className="content-table__scroll-container">
      <table className="content-table">
        <thead className="content-table__head">
          <tr className="content-table__row">
            <th className="content-table__header content-table__header--sticky">ФИО амбассадора</th>
            <th className="content-table__header">Первый отзыв</th>
            <th className="content-table__header">Статус</th>
            <th className="content-table__header">Гайд</th>
            <th className="content-table__header">Статус</th>
            <th className="content-table__header">После гайда</th>
          </tr>
        </thead>
        <tbody className="content-table__body">
          {ambassadorsContent.map((ambassador) => (
            <tr className="content-table__row" key={ambassador.ambassadorName}>
              <td
                className="content-table__cell content-table__cell--sticky"
              >
                <div className="sticky-cell-inner">
                  {ambassador.ambassadorName}
                </div>
              </td>
              {ambassador.contentTypes.map((type) => {
                const typeKey = `${ambassador.ambassadorName}-${type.title}`;

                return (
                  <React.Fragment key={typeKey}>
                    <td className="content-table__cell">
                      <div className="content-table__links-container">
                        {type.contents.map((content) => (
                          <a
                            className="content-table__cell-link"
                            href={content.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={content.id}
                          >
                            <span className="content-table__link-span" />
                            {getServiceNameFromURL(content.link)}
                          </a>
                        ))}
                      </div>
                    </td>
                    {type.title !== 'После гайда' && (
                    <td className="content-table__cell">
                      {' '}
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
                    </td>
                    )}
                  </React.Fragment>
                );
              })}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default TableContent;
