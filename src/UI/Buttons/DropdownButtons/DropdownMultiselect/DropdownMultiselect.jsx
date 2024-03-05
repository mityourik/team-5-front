import Miltiselect from 'multiselect-react-dropdown';
// import { useEffect } from 'react';
import { Formik, Form } from 'formik';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './DropdownMultiselect.scss';

function DropdownMultiselect({
  goals, labelText,
}) {
  const handleValidate = (values) => {
    const errors = {};
    if (values.selectedOptions.length === 0) {
      errors.selectedOptions = 'Обязательно для выбора';
    }
    console.log(`${JSON.stringify(values.selectedOptions)}`);
    console.log(values.selectedOptions);
    return errors;
  };

  return (
    <div className="dropdown-multiselect-container">
      <label className="dropdown-multiselect__label">
        {labelText}
      </label>
      <div className="dropdown-multiselect-pack">
        <Formik
          initialValues={{ selectedOptions: [{ goal: 'Смена профессии' }] }}
          validate={handleValidate}
        >
          {({ values, setFieldValue }) => (
            <Form className="dropdown-multiselect-pack">
              <Miltiselect
                options={goals}
                selectedValues={values.selectedOptions}
                onSelect={(selectedList) => setFieldValue('selectedOptions', selectedList)}
                onRemove={(removeItem, index) => {
                  const updatedSelection = values.selectedOptions.filter(
                    (option) => option.goal !== removeItem[index],
                    console.log(`removeItem ${JSON.stringify(removeItem)}`),
                  );
                  console.log(`updatedSelection ${updatedSelection}`);
                  if (values.selectedOptions.length > 1) {
                    setFieldValue('selectedOptions', updatedSelection);
                  }
                  if (values.selectedOptions.length <= 1) {
                    setFieldValue('selectedOptions', []);
                  }
                }}
            //   onRemove={handleRemove}
                displayValue="goal"
                hidePlaceholder
                placeholder="Выберите из списка"
                hideSelectedList={false}
                keepSearchTerm
              />
              <div className="dropdown-multiselect__error-container">
                {values.selectedOptions.length < 1 && <span className="dropdown-multiselect__error">Обязательно для выбора</span>}
              </div>
            </Form>
          )}

        </Formik>
      </div>
    </div>
  );
}

DropdownMultiselect.propTypes = {
  goals: PropTypes.arrayOf(PropTypes.shape({
    goal: PropTypes.string.isRequired,
  })).isRequired,
  labelText: PropTypes.string.isRequired,
};

export default DropdownMultiselect;
