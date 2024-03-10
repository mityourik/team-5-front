import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { useSelector } from 'react-redux';
import { getAmbassadorData, getIsAmbassadorDataEditing, getIsNewAmbassadorAdding } from '../../services/selectors/ambassadorSelector';
import './AmbassadorInfoTable.scss';

export default function AmbassadorInfoTable({ data, children, handleSubmit }) {
  const isAmbassadorDataEditing = useSelector(getIsAmbassadorDataEditing);
  const isIsNewAmbassadorAdding = useSelector(getIsNewAmbassadorAdding);
  const ambassadorData = useSelector(getAmbassadorData);

  return (
    !isAmbassadorDataEditing && !isIsNewAmbassadorAdding ? (
      <table className="ambassador__info-table">
        <tbody className="ambassador__table-container has-gap">
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
        initialValues={!isIsNewAmbassadorAdding ? {
          promocode: ambassadorData.promocode || 'VASYAPUPKIN', // если null (как на сервере), то VASYAPUPKIN
          // promocode: 'VASYAPUPKIN',
          goal: ambassadorData.aim || 'Смена профессии',
          plans: ambassadorData.want_to_do || 'Вести блог, Писать статьи, Снимать видео или сниматься в них, если продакшн будет на нашей стороне',
          curator: ambassadorData.supervisor || 'Анастасия Борисова',
          education: ambassadorData.education || 'СПБГУПТД',
          placeOfWork: ambassadorData.job || 'Безработный дизайнер',
          country: ambassadorData.country || 'Россия',
          city: ambassadorData.city || 'Санкт-Петербург',
          index: ambassadorData.zip_code || '190000',
          address: ambassadorData.address || 'Университетская наб., 3',
          gender: ambassadorData.gender || 'Мужской',
          clothingSize: ambassadorData.shirt_size || 'M',
          shoeSize: ambassadorData.shoes_size || '40',
          comment: ambassadorData.comment || 'Я готов на все ради мерча',
        } : {
          promocode: '',
          goal: '',
          plans: '',
          curator: '',
          education: '',
          placeOfWork: '',
          country: '',
          city: '',
          index: '',
          address: '',
          gender: '',
          clothingSize: '',
          shoeSize: '',
          comment: '',
        }}
        onSubmit={handleSubmit}
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
  data: [],
};

AmbassadorInfoTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string || PropTypes.number,
  })),
  children: PropTypes.node,
  handleSubmit: PropTypes.func.isRequired,
};

// use <tr key={index.id}> instead of <tr key={index}>
