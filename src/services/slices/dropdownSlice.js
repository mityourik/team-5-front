/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { fetchGetStudyProgramms } from '../thunks/dropdownThunk';

export const initialState = {
  selectedValue: '',
  errorDropdown: false,
  errorMessageDropdown: '',
  studyProgramms: [],
  // Purpose of study
  studyPurposes: [],
  // Goals
  goals: [],
};

const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    setDropdownValue: (state, action) => {
      state.dropdownValue = action.payload;
    },
    setErrorDropdown: (state) => {
      state.errorDropdown = true;
      // state.errorMessageDropdown = action.error.errorMessageDropdown
      // || 'Список обязателен для выбора';
      state.errorMessageDropdown = 'Список обязателен для выбора';
    },
    setStudyPurposes: (state, action) => {
      state.studyPurposes = action.payload;
    },
    setStudyProgramm: (state, action) => {
      state.studyProgramm = action.payload;
    },
    setGoals: (state, action) => {
      state.goals = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetStudyProgramms.fulfilled, (state, action) => {
        state.studyProgramms = action.payload;
        console.log('action.payload', action.payload);
        state.errorDropdown = false;
        state.errorMessageDropdown = '';
        state.selectedValue = action.payload;
      })
      .addCase(fetchGetStudyProgramms.rejected, (state) => {
        state.errorDropdown = true;
        state.errorMessageDropdown = 'Список обязателен для выбора';
      })
      .addCase(fetchGetStudyProgramms.pending, (state) => {
        state.errorDropdown = false;
        state.errorMessageDropdown = '';
      });
  },
});

export const {
  setDropdownValue, setErrorDropdown, setStudyPurposes, setGoals,
} = dropdownSlice.actions;
export default dropdownSlice.reducer;
