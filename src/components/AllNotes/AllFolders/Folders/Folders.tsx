import classes from './Folders.module.scss';
import FoldersHeader from '../FoldersHeader/FoldersHeader';
import FolderItem from '../FolderItem/FolderItem';
import { v4 as uuidv4 } from 'uuid';

const DUMMY_FOLDER = [
  {
    name: 'Personal',
    selected: false,
    id: uuidv4(),
  },
];

const Folders = () => {
  return (
    <div className={classes.container}>
      <FoldersHeader />
      {DUMMY_FOLDER.map(folder => (
        <FolderItem name={folder.name} />
      ))}
    </div>
  );
};

export default Folders;
