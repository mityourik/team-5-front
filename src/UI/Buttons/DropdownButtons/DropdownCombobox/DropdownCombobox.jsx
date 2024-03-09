import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { setStudyPurposes } from '../../../../services/slices/dropdownSlice';
import { getAmbassadorData, getIsNewAmbassadorAdding } from '../../../../services/selectors/ambassadorSelector';
import './DropdownCombobox.scss';
import '../DropdownMultiselect/DropdownMultiselect.scss';

function DropdownCombobox({ purposes, labelText }) {
  const studyPurposes = useSelector((state) => state.dropdown.studyPurposes);
  const isNewAmbassadorAdding = useSelector(getIsNewAmbassadorAdding);
  const ambassadorData = useSelector(getAmbassadorData);
  const dispatch = useDispatch();
  const [interacted, setInteracted] = useState(false);

  useEffect(() => {
    if (isNewAmbassadorAdding) {
      dispatch(setStudyPurposes([]));
    } else {
      dispatch(setStudyPurposes([{ label: ambassadorData.aim || 'Смена профессии', value: ambassadorData.aim || 'Смена профессии' }]));
      // dispatch(setStudyPurposes([{ label: 'Смена профессии', value: 'Смена профессии' }]));
    }
  }, [dispatch, isNewAmbassadorAdding]);

  const handleChange = (selectedOptions) => {
    dispatch(setStudyPurposes(selectedOptions));
    setInteracted(true);
  };

  const handleFocus = () => {
    setInteracted(true);
  };

  const handleBlur = () => {
    if (studyPurposes.length === 0) {
      setInteracted(false);
    }
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
            onBlur={handleBlur}
            onFocus={handleFocus}
            isMulti
            isSearchable
            creatable
            placeholder="Введите или выберите из списка"
          />
          <div className="dropdown-multiselect__error-container">
            {(interacted && studyPurposes.length === 0) && <span className="dropdown-multiselect__error">Обязательно для выбора</span>}
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
