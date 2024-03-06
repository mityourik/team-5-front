import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { setStudyPurposes } from '../../../../services/slices/dropdownSlice';
import './DropdownCombobox.scss';
import '../DropdownMultiselect/DropdownMultiselect.scss';

function DropdownCombobox({ purposes, labelText }) {
  const studyPurposes = useSelector((state) => state.dropdown.studyPurposes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStudyPurposes([{ value: 'Смена профессии', label: 'Смена профессии' }]));
  }, [dispatch]);

  const handleChange = (selectedOptions) => {
    dispatch(setStudyPurposes(selectedOptions));
  };

  return (
    <div className="dropdown-multiselect-container">
      <label className="dropdown-multiselect__label">
        {labelText}
      </label>
      <div className="dropdown-multiselect-pack">
        <div className="dropdown-multiselect-form">
          <Select
            options={purposes}
            value={studyPurposes}
            onChange={handleChange}
            isMulti
            isSearchable
            creatable
            placeholder="Введите или выберите из списка"
          />
          <div className="dropdown-multiselect__error-container">
            {studyPurposes.length === 0 && <span className="dropdown-multiselect__error">Обязательно для выбора</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

DropdownCombobox.propTypes = {
  purposes: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  labelText: PropTypes.string.isRequired,
};

export default DropdownCombobox;
