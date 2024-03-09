import { useState } from 'react';
import PropTypes from 'prop-types';
import './ContentLinkCellAfterGuide.scss';

function ContentLinkCellAfterGuide({
  content,
  ambassadorName,
  contentTypeTitle,
  handleDeleteLink,
}) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMerchSent, setIsMerchSent] = useState(null);

  const statusButtonClass = `content-link-cell-ag__status-button ${
    isMerchSent ? 'content-link-cell-ag__status-button_visible' : ''
  }`;

  function toggleDropdown() {
    setIsDropdownVisible(!isDropdownVisible);
  }

  function handleSendMerch() {
    console.log('отправка мерча');
    setIsMerchSent(true);
    setIsDropdownVisible(false);
  }

  function handleCancelSend() {
    setIsMerchSent(false);
    setIsDropdownVisible(false);
  }

  function getServiceNameFromURL(url) {
    const parsedUrl = new URL(url);
    const { hostname } = parsedUrl;

    const serviceNames = {
      't.me': 'telegram',
      'habr.com': 'habr',
      'youtube.com': 'youtube',
      'linkedin.com': 'linkedin',
      'twitter.com': 'twitter',
      // добавить маппинги
    };

    return serviceNames[hostname] || hostname;
  }

  return (
    <div className="content-link-cell-ag__link-container">
      <div className="content-link-cell-ag__link-container_top">
        <a
          className="content-link-cell-ag__cell-link"
          href={content.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="content-link-cell-ag__link-span" />
          {getServiceNameFromURL(content.link)}
        </a>
        <button
          type="button"
          className="content-link-cell-ag__link-caret"
          onClick={toggleDropdown}
        >
          {' '}
        </button>
        {!isMerchSent && (
          <button
            type="button"
            className="content-link-cell-ag__link-delete-btn"
            onClick={() => handleDeleteLink(content.id, ambassadorName, contentTypeTitle)}
          >
            {' '}
          </button>
        )}
      </div>
      {isDropdownVisible && (
        <div className="content-link-cell-ag__dropdown">
          {isMerchSent !== true && (
            <button type="button" className="content-link-cell-ag__dropdown-button" onClick={handleSendMerch}>Отправить мерч</button>
          )}
          {isMerchSent !== false && (
            <button type="button" className="content-link-cell-ag__dropdown-button" onClick={handleCancelSend}>Отменить отправку</button>
          )}
        </div>
      )}
      {isMerchSent !== null && (
        <button type="button" className={statusButtonClass}>
          {' '}
        </button>
      )}
    </div>
  );
}

ContentLinkCellAfterGuide.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  ambassadorName: PropTypes.string.isRequired,
  contentTypeTitle: PropTypes.string.isRequired,
  handleDeleteLink: PropTypes.func.isRequired,
};

export default ContentLinkCellAfterGuide;
