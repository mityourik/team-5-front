import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ambassadorSlice from './slices/ambassadorSlice';
import dropdownSlice from './slices/dropdownSlice';

const rootReducer = combineReducers({
  ambassador: ambassadorSlice,
  dropdown: dropdownSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
