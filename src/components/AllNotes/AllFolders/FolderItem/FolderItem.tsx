import React, { FC } from 'react';
import { folderSlice } from '../../../../store/reducers/folderSlice';
import { useAppDispatch } from '../../../../hooks/redux';
import classes from './FolderItem.module.scss';

interface ItemProps {
  name: string;
  isSelected: boolean;
  id: string | number;
}

const FolderItem: FC<ItemProps> = ({ name, isSelected, id }) => {
  const dispatch = useAppDispatch();
  const { select, removeFolder } = folderSlice.actions;
  const selectHandler = () => {
    dispatch(select({ id }));
  };

  const removeFolderHandler = () => {
    dispatch(removeFolder(id));
  };

  return (
    <div
      className={classes.item}
      style={{ background: isSelected ? '#ECECEC' : 'white' }}
      onClick={selectHandler}
    >
      <div className={classes.basic}>
        <h2>{name}</h2>
        <button onClick={removeFolderHandler}>╳</button>
      </div>
    </div>
  );
};

export default FolderItem;
