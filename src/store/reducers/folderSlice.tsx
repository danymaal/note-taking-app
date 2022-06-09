import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFolder } from '../../models/IFolder';

interface FolderState {
  folders: IFolder[];
  isOpened: boolean;
  isShowDelete: boolean;
}

const initialState: FolderState = {
  folders: [],
  isOpened: false,
  isShowDelete: false,
};

export const folderSlice = createSlice({
  name: 'folder',
  initialState,
  reducers: {
    addFolder: (state, action: PayloadAction<IFolder>) => {
      state.folders = state.folders.concat(action.payload);
    },

    toggle: state => {
      state.isOpened = !state.isOpened;
    },

    select: (state, action) => {
      const selectedFolder = state.folders.find(
        folder => folder.id === action.payload.id
      );
      if (selectedFolder) {
        selectedFolder.isSelected = !selectedFolder.isSelected;
      }
    },

    showDelete: state => {
      state.isShowDelete = !state.isShowDelete;
    },

    removeFolder: (state, action) => {
      state.folders = state.folders.filter(
        folder => folder.id === action.payload.id
      );
    },
  },
});

export default folderSlice.reducer;
