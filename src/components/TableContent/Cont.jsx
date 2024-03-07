import { useState, useEffect } from 'react';
import axios from 'axios';
import './TableContent.scss';

function Cont() {
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

  const handleStatusChange = async (ambassadorName, contentTypeTitle) => {
    // Здесь должна быть логика для вызова API и изменения статуса на сервере
    // Имитация изменения статуса в локальном состоянии:
    setAmbassadorsContent((currentContent) => currentContent.map((ambassador) => {
      if (ambassador.ambassadorName === ambassadorName) {
        return {
          ...ambassador,
          contentTypes: ambassador.contentTypes.map((contentType) => {
            if (contentType.title === contentTypeTitle) {
              const newStatus = contentType.status === 'Выполнено' ? 'Не выполнено' : 'Выполнено';
              return { ...contentType, status: newStatus };
            }
            return contentType;
          }),
        };
      }
      return ambassador;
    }));
  };

  return (
    <div className="content-table__scroll-container">
      <table className="content-table">
        <thead className="content-table__head">
          <tr className="content-table__row">
            <th className="content-table__header">Имя амбассадора</th>
            <th className="content-table__header">Первый отзыв</th>
            <th className="content-table__header">Гайд</th>
            <th className="content-table__header">После гайда</th>
          </tr>
        </thead>
        <tbody className="content-table__body">
          {ambassadorsContent.map((ambassador) => (
            <tr className="content-table__row" key={ambassador.ambassadorName}>
              <td className="content-table__cell">{ambassador.ambassadorName}</td>
              {/* <td className="content-table__cell">
                <a href={ambassador.telegramHandle} target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
              </td> */}
              {ambassador.contentTypes.map((type) => (
                <td className="content-table__cell" key={type.title}>
                  <div className="content-table__cell-content">
                    {type.contents.map((content) => (
                      <a className="content-table__cell-link" href={content.link} target="_blank" rel="noopener noreferrer" key={content.id}>
                        {content.link}
                      </a>
                    ))}
                    <button
                      type="button"
                      onClick={() => handleStatusChange(ambassador.ambassadorName, type.title)}
                      className="content-table__cell-content-status-btn"
                    >
                      {type.status === 'Выполнено' ? '✓' : '✗'}
                    </button>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cont;
