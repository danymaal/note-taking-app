import { configureStore } from '@reduxjs/toolkit';
import folderReducer from './reducers/folderSlice';
import notesReducer from './reducers/notesSlice';

export const store = configureStore({
  reducer: {
    folder: folderReducer,
    notes: notesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
