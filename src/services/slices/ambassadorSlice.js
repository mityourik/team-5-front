/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

// initialState хранит начальное состояние(= 1-ый аргумент в хуке useState)
export const initialState = {
  // User
  ambassadorData: null,
  // загрузка данных юзера
  isLoadingAmbassador: false,
  errorAmbassador: false,
  errorMessageAmbassador: '',
  // Ambassador's data editing
  isAmbassadorDataEditing: false, // состояние редактирования
  isLoadingAmbassadorData: false, // загрузка/обновление данных
  errorEdit: false,
  errorMessageEdit: '',
};

const ambassadorSlice = createSlice({
  name: 'ambassador',
  initialState,
  // reducers используется для изменения состояния (= 2-ой аргумент в хуке useState)
  reducers: {
    setIsAmbassadorDataEditingTrue: (state) => {
      state.isAmbassadorDataEditing = true;
    },
    setIsAmbassadorDataEditingFalse: (state) => {
      state.isAmbassadorDataEditing = false;
    },
  },
});

export const {
  setIsAmbassadorDataEditingTrue,
  setIsAmbassadorDataEditingFalse,
} = ambassadorSlice.actions;

export default ambassadorSlice.reducer;
