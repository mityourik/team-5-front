import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MultiSelect } from 'primereact/multiselect';
import PropTypes from 'prop-types';
import { setGoals } from '../../../../services/slices/dropdownSlice';
import './DropdownMultiselect.scss';

function DropdownMultiselect({ goals, labelText }) {
  const studyGoals = useSelector((state) => state.dropdown.goals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setGoals([{ goal: 'Вести блог' }, { goal: 'Писать статьи' }]));
  }, [dispatch]);

  const handleChange = (selectedOptions) => {
    // получаем доступ к свойствам объекта selectedOptions
    // или просто к пустому массиву по дефолту, если что-то пойдёт не так
    const selectedValues = selectedOptions.value || [];
    // проходимся по всем объектам массива и их свойствам goal
    const options = selectedValues.map((option) => ({ goal: option.goal }));
    // изменяем стейт studyProgramms
    dispatch(setGoals(options));
  };

  return (
    <div className="dropdown-multiselect-container">
      <label className="dropdown-multiselect__label">
        {labelText}
      </label>
      <div className="dropdown-multiselect-pack">
        <div className="dropdown-multiselect-form">
          <MultiSelect
            options={goals}
            value={studyGoals}
            onChange={handleChange}
            optionLabel="goal"
            placeholder="Выберите из списка"
            className="dropdown-multiselect"
          />
          <div className="dropdown-multiselect__error-container">
            {studyGoals.length === 0 && <span className="dropdown-multiselect__error">Обязательно для выбора</span>}
          </div>
        </div>
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
