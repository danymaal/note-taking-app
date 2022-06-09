import React, { FC } from 'react';
import classes from './FoldersHeader.module.scss';
import { useAppDispatch } from '../../../../hooks/redux';
import { folderSlice } from '../../../../store/reducers/folderSlice';

const FoldersHeader: FC = () => {
  const { toggle } = folderSlice.actions;
  const dispatch = useAppDispatch();
  const toggleAddFolder = () => {
    dispatch(toggle());
  };

  return (
    <div className={classes.top}>
      <h2>Folders</h2>
      <button onClick={toggleAddFolder}>+</button>
    </div>
  );
};

export default FoldersHeader;
