import React, { FC } from 'react';
import classes from './NotesList.module.scss';
import NoteListHeader from './NotesListHeader/NoteListHeader';
import NotesListElement from './NotesListElement/NotesListElement';
import { useAppSelector } from '../../../hooks/redux';

const DUMMY_NOTES = [
  {
    name: 'Note',
  },
];

const NotesList: FC = () => {
  const { notes } = useAppSelector(state => state.notes);

  return (
    <div className={classes.container}>
      <NoteListHeader />
      {notes.map(note => (
        <NotesListElement key={note.name} name={note.name} date={note.date} />
      ))}
    </div>
  );
};

export default NotesList;
