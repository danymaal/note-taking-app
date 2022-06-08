import { images } from '../../../../assets/images/images';
import classes from './NoteListHeader.module.scss';

const NoteListHeader = () => {
  return (
    <div className={classes.header}>
      <h5>Folder name</h5>
      <button>
        <img src={images.trash_can} alt="trash" />
      </button>
    </div>
  );
};

export default NoteListHeader;
