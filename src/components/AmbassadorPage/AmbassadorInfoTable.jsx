import PropTypes from 'prop-types';
import './AmbassadorInfoTable.scss';

export default function AmbassadorInfoTable({ data }) {
  return (
    <table className="ambassador__info-table">
      <tbody className="ambassador__table-container">
        {data.map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <tr className="ambassador__table-row" key={index}>
            <td className="ambassador__table-label">{item.label}</td>
            <td className="ambassador__table-value">{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

AmbassadorInfoTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
};

// use <tr key={index.id}> instead of <tr key={index}>
