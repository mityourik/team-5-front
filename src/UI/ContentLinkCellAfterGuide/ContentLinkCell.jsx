import PropTypes from 'prop-types';
import '../ContentLinkCell/ContentLinkCell.scss';

function ContentLinkCell({
  content,
  ambassadorName,
  contentTypeTitle,
  handleDeleteLink,
}) {
  function getServiceNameFromURL(url) {
    const parsedUrl = new URL(url);
    const { hostname } = parsedUrl;

    const serviceNames = {
      't.me': 'Telegram',
      'habr.com': 'Habr',
      'youtube.com': 'YouTube',
      'linkedin.com': 'LinkedIn',
      'twitter.com': 'Twitter',
      // другие маппинги
    };

    return serviceNames[hostname] || hostname;
  }

  return (
    <div className="content-link-cell__link-container" key={content.id}>
      <a
        className="content-link-cell__cell-link"
        href={content.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="content-link-cell__link-span" />
        {getServiceNameFromURL(content.link)}
      </a>
      <button
        type="button"
        className="content-link-cell__link-delete-btn"
        onClick={() => handleDeleteLink(content.id, ambassadorName, contentTypeTitle)}
      >
        {' '}
      </button>
    </div>
  );
}

ContentLinkCell.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  ambassadorName: PropTypes.string.isRequired,
  contentTypeTitle: PropTypes.string.isRequired,
  handleDeleteLink: PropTypes.func.isRequired,
};

export default ContentLinkCell;
