import React, { FC } from 'react';
import { images } from '../../../../assets/images/images';
import classes from './EditNoteHeader.module.scss';
import { useAppDispatch } from '../../../../hooks/redux';
import { notesSlice } from '../../../../store/reducers/notesSlice';

const EditNoteHeader: FC = () => {
  const dispatch = useAppDispatch();
  const { addNote } = notesSlice.actions;

  const dateCreated = Date.now();

  const addNoteHandler = () => {
    dispatch(
      addNote({ name: 'New Note', date: dateCreated, isSelected: false })
    );
  };
  return (
    <div className={classes.header}>
      <button onClick={addNoteHandler}>
        <img src={images.edit_note} alt="edit note" />
      </button>
    </div>
  );
};

export default EditNoteHeader;
