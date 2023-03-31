
import { EditGuesser, ListGuesser } from 'react-admin';
import UserCreate from './UserCreate';
import { UserEdit } from './UserEdit ';
import UserList from './UserList';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    list:UserList,
    edit: UserEdit,
    create: UserCreate,
};
