import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { useSelector } from 'react-redux';
import { getIsAmbassadorDataEditing } from '../../services/selectors/ambassadorSelector';
import './AmbassadorInfoTable.scss';

export default function AmbassadorInfoTable({ data, children }) {
  const isAmbassadorDataEditing = useSelector(getIsAmbassadorDataEditing);

  return (
    !isAmbassadorDataEditing ? (
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
    ) : (
      <Formik
        initialValues={{
          promocode: 'VASYAPUPKIN',
          goal: 'Смена профессии',
          plans: 'Вести блог, Писать статьи, Снимать видео или сниматься в них, если продакшн будет на нашей стороне',
          curator: 'Анастасия Борисова',
          education: 'СПБГУПТД', // education?
          placeOfWork: 'Безработный дизайнер ',
          country: 'Россия',
          city: 'Санкт-Петербург',
          index: '190000',
          address: 'Университетская наб., 3',
          gender: 'Мужской',
          clothingSize: 'M',
          shoeSize: '40',
          comment: 'Я готов на все ради мерча',
        }}
        onSubmit={() => console.log('submit')}
      >
        {() => (
          <Form className="ambassador__table-container">
            {children}
          </Form>
        )}
      </Formik>

    )

  );
}

AmbassadorInfoTable.defaultProps = {
  children: null,
};

AmbassadorInfoTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  children: PropTypes.node,
};

// use <tr key={index.id}> instead of <tr key={index}>
