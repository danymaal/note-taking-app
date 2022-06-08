import React, { FC } from 'react';
import classes from './NotesList.module.scss';
import NoteListHeader from './NotesListHeader/NoteListHeader';

const NotesList: FC = () => {
  return (
    <div className={classes.container}>
      <NoteListHeader />
    </div>
  );
};

export default NotesList;
