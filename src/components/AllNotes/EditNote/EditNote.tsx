import React from 'react';
import classes from './EditNote.module.scss';
import EditNoteHeader from './EditNoteHeader/EditNoteHeader';

const EditNote = () => {
  return (
    <div className={classes.container}>
      <EditNoteHeader />
    </div>
  );
};

export default EditNote;
