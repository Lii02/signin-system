import { configureStore } from '@reduxjs/toolkit';
import signinReducer from './slice';

export const globalStore = configureStore({
  reducer: {
    log: signinReducer
  },
});