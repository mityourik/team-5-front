/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// initialState хранит начальное состояние(= 1-ый аргумент в хуке useState)
export const initialState = {
  // User
  ambassadorData: null,
  // Ambassador's data loading
  isLoadingAmbassador: false,
  errorAmbassador: false,
  errorMessageAmbassador: '',
  // Ambassador's data editing
  isAmbassadorDataEditing: false, // состояние редактирования
  isLoadingAmbassadorData: false, // загрузка/обновление данных
  errorEdit: false,
  errorMessageEdit: '',
  // adding new ambassador
  isNewAmbassadorAdding: false,
};

const ambassadorSlice = createSlice({
  name: 'ambassador',
  initialState,
  // reducers используется для изменения состояния (= 2-ой аргумент в хуке useState)
  reducers: {
    setIsAmbassadorDataEditingTrue: (state) => {
      state.isAmbassadorDataEditing = true;
      state.isNewAmbassadorAdding = false;
    },
    setIsAmbassadorDataEditingFalse: (state) => {
      state.isAmbassadorDataEditing = false;
      state.isNewAmbassadorAdding = false;
    },
    setIsNewAmbassadorAddingTrue: (state) => {
      state.isNewAmbassadorAdding = true;
      state.isAmbassadorDataEditing = false;
    },
  },
});

export const {
  setIsAmbassadorDataEditingTrue,
  setIsAmbassadorDataEditingFalse,
  setIsNewAmbassadorAddingTrue,
} = ambassadorSlice.actions;

export default ambassadorSlice.reducer;
