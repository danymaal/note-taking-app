import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INote } from '../../models/INote';

interface NotesState {
  notes: INote[];
}

const initialState: NotesState = {
  notes: [],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<INote>) => {
      state.notes = state.notes.concat(action.payload);
    },
  },
});

export default notesSlice.reducer;
