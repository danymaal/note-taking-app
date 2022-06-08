import React, { FC } from 'react';
import classes from './FolderItem.module.scss';

interface ItemProps {
  name: string;
}

const FolderItem: FC<ItemProps> = ({ name }) => {
  return (
    <div className={classes.item}>
      <h2>{name}</h2>
      <button>╳</button>
    </div>
  );
};

export default FolderItem;
