import { createSlice } from '@reduxjs/toolkit';

interface FolderState {
  name: string;
  isSelected: boolean;
}

const initialState: FolderState = {
  name: '',
  isSelected: false,
};

export const folderSlice = createSlice({
  name: '',
  initialState,
  reducers: {},
});
