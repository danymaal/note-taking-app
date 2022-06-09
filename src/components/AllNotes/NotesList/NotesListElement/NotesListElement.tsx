import React, { FC } from 'react';
import classes from './NotesListElement.module.scss';

interface ElementProps {
  name: string;
  date: any;
}

const NotesListElement: FC<ElementProps> = ({ name, date }) => {
  return (
    <div className={classes.container}>
      <h5>{name}</h5>
      <div className={classes.bottom}>
        <p>
          {new Date(date).toLocaleDateString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
        <p>hello bruh</p>
      </div>
    </div>
  );
};

export default NotesListElement;
