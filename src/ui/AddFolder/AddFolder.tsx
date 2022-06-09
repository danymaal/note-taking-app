import React, { FC } from 'react';
import classes from './AddFolder.module.scss';
import { useForm } from 'react-hook-form';
import { folderSlice } from '../../store/reducers/folderSlice';
import { useAppDispatch } from '../../hooks/redux';
import { v4 as uuidv4 } from 'uuid';

const AddFolder: FC = () => {
  const { toggle, addFolder } = folderSlice.actions;
  const dispatch = useAppDispatch();
  let id: string | number = uuidv4();

  interface Data {
    name: string;
    id: string | number;
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submitHandler = handleSubmit(data => {
    dispatch(toggle());
    dispatch(addFolder({ name: data.folderName, isSelected: false, id: id }));
  });
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        type="text"
        {...register('folderName', { required: 'This field is required!' })}
      />
      {errors?.folderName && (
        <p className={classes.error}>{errors?.folderName.message}</p>
      )}
      <button type="submit">Add</button>
    </form>
  );
};

export default AddFolder;
