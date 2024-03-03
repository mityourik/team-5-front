/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  dropdownValue: '',
  errorDropdown: false,
  errorMessageDropdown: '',
};

const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    setDropdownValue: (state, action) => {
      state.dropdownValue = action.payload;
    },
    setErrorDropdown: (state, action) => {
      state.errorDropdown = true;
      state.errorMessageDropdown = action.error.message || 'Список обязателен для выбора';
    },
  },
});

export const { setDropdownValue, setErrorDropdown } = dropdownSlice.actions;
export default dropdownSlice.reducer;
