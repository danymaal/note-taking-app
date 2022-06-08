import NotesList from '../NotesList/NotesList';
import EditNote from '../EditNote/EditNote';
import classes from './Notes.module.scss';
import Folders from '../AllFolders/Folders/Folders';

const Notes = () => {
  return (
    <div className={classes.notes}>
      <Folders />
      <NotesList />
      <EditNote />
    </div>
  );
};

export default Notes;
