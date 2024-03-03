import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ambassadorSlice from './slices/ambassadorSlice';

const rootReducer = combineReducers({
  ambassador: ambassadorSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
