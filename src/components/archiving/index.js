
import { EditGuesser, ListGuesser, usePermissions } from 'react-admin';
import { ArchivageEdit } from './ArchivageEdit';
import ArchivageList from './ArchivageList';
import ArchivageCreate from './createArchive';

import CreateArchive from './createArchive';

export default {  
    list: ArchivageList,
    edit: ArchivageEdit,
    create: CreateArchive,
  
};
