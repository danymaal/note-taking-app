import React, { FC } from 'react';
import classes from './FoldersHeader.module.scss';

const FoldersHeader: FC = () => {
  return (
    <div className={classes.top}>
      <h2>Folders</h2>
      <button>+</button>
    </div>
  );
};

export default FoldersHeader;
