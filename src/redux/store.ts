import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { CharSlice } from './slices/charSlice';

const rootReducer = combineReducers({
  char: CharSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
