import React, { FC } from 'react';
import classes from './RemoveFolder.module.scss';
import { useAppDispatch } from '../../hooks/redux';
import { folderSlice } from '../../store/reducers/folderSlice';

interface RemoveProps {
  id: string | number;
}

const RemoveFolder: FC<RemoveProps> = ({ id }) => {
  const dispatch = useAppDispatch();
  const { showDelete, removeFolder } = folderSlice.actions;

  const hideHandler = () => {
    dispatch(showDelete());
  };

  const removeFolderHandler = () => {
    dispatch(removeFolder(id));
  };

  return (
    <div className={classes.remove}>
      <h4>You sure you want to delete this folder?</h4>
      <div className={classes.buttons}>
        <button onClick={removeFolderHandler}>Yes</button>
        <button onClick={hideHandler}>No</button>
      </div>
    </div>
  );
};

export default RemoveFolder;
