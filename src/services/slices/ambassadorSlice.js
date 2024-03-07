/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContent, fetchAmbassadorInfo, fetchEditAmbassador, fetchGetAllAmbassadors,
} from '../thunks/ambassadorThunk';

// initialState хранит начальное состояние(= 1-ый аргумент в хуке useState)
export const initialState = {
  // Login
  isLogin: false,
  // Ambassador
  ambassadorList: [],
  ambassadorData: {},
  ambassadorId: '',
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchAmbassadorInfo.fulfilled, (state, action) => {
        console.log('action.payload', action.payload);
        state.ambassadorData = action.payload;
        state.ambassadorId = action.payload.id;
        state.isLoadingAmbassador = false;
        state.errorAmbassador = false;
      })
      .addCase(fetchAmbassadorInfo.pending, (state) => {
        state.isLoadingAmbassador = true;
        state.errorAmbassador = false;
      })
      .addCase(fetchAmbassadorInfo.rejected, (state) => {
        state.isLoadingAmbassador = false;
        state.errorAmbassador = true;
      })
      .addCase(fetchContent.fulfilled, (state, action) => {
        state.ambassadorList = action.payload;
        state.isLoadingAmbassador = false;
        state.errorAmbassador = false;
      })
      .addCase(fetchContent.pending, (state) => {
        state.isLoadingAmbassador = true;
        state.errorAmbassador = false;
      })
      .addCase(fetchContent.rejected, (state) => {
        state.isLoadingAmbassador = false;
        state.errorAmbassador = true;
      })
      .addCase(fetchEditAmbassador.fulfilled, (state, action) => {
        state.ambassadorData = action.payload;
        state.isLoadingAmbassadorData = false;
        state.errorEdit = false;
        state.errorMessageEdit = '';
      })
      .addCase(fetchEditAmbassador.pending, (state) => {
        state.isLoadingAmbassadorData = true;
        state.errorEdit = false;
      })
      .addCase(fetchEditAmbassador.rejected, (state) => {
        state.isLoadingAmbassadorData = false;
        state.errorEdit = true;
        // state.errorMessageEdit = action.payload;
      })
      .addCase(fetchGetAllAmbassadors.fulfilled, (state, action) => {
        state.ambassadorList = action.payload;
        state.isLoadingAmbassador = false;
        state.errorAmbassador = false;
      })
      .addCase(fetchGetAllAmbassadors.pending, (state) => {
        state.isLoadingAmbassador = true;
        state.errorAmbassador = false;
      })
      .addCase(fetchGetAllAmbassadors.rejected, (state) => {
        state.isLoadingAmbassador = false;
        state.errorAmbassador = true;
      });
  },
});

export const {
  setIsAmbassadorDataEditingTrue,
  setIsAmbassadorDataEditingFalse,
  setIsNewAmbassadorAddingTrue,
} = ambassadorSlice.actions;

export default ambassadorSlice.reducer;
