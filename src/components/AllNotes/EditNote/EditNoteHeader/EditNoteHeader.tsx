import React, { FC } from 'react';
import { images } from '../../../../assets/images/images';
import classes from './EditNoteHeader.module.scss';

const EditNoteHeader: FC = () => {
  return (
    <div className={classes.header}>
      <button>
        <img src={images.edit_note} alt="edit note" />
      </button>
    </div>
  );
};

export default EditNoteHeader;
