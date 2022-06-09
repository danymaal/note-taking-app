import classes from './Folders.module.scss';
import FoldersHeader from '../FoldersHeader/FoldersHeader';
import FolderItem from '../FolderItem/FolderItem';
import { v4 as uuidv4 } from 'uuid';
import AddFolder from '../../../../ui/AddFolder/AddFolder';
import { useAppSelector } from '../../../../hooks/redux';

const DUMMY_FOLDER = [
  {
    name: 'Personal',
    selected: false,
    id: uuidv4(),
  },
];

const Folders = () => {
  const { isOpened, folders } = useAppSelector(state => state.folder);

  return (
    <div className={classes.container}>
      <FoldersHeader />
      {isOpened && <AddFolder />}
      {folders.map(folder => (
        <FolderItem
          name={folder.name}
          key={folder.id}
          isSelected={folder.isSelected}
          id={folder.id}
        />
      ))}
    </div>
  );
};

export default Folders;
