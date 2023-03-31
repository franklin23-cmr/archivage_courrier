import * as React from 'react';
import { CreateButton, defaultTheme, DeleteButton, EditButton, ExportButton, FilterButton, FilterContext, FilterForm, ListBase, SearchInput, SortButton, TopToolbar, useListContext } from 'react-admin';
import inflection from 'inflection';
import { Grid, Card, CardMedia, CardContent, CardActions, Typography, } from '@mui/material';
import { Box, useMediaQuery} from '@mui/material';


import { Datagrid, DateField, List, TextField } from 'react-admin';
const postFilters = [
    <SearchInput source="q" alwaysOn />
    // <TextInput label="Search" source="q" alwaysOn />,
    // <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];
// filters={postFilters}
const UserList = () => (
    <List >
    <Datagrid rowClick="edit">
        <TextField source="photo" />
        <TextField source="nom" />
        <TextField source="prenom" />
        <TextField source="grade" />
        <TextField source="type_utilisateur" />
        <TextField source="email_address" />
        <TextField source="matricule" />
        <EditButton/>
        <DeleteButton/>
    </Datagrid>
</List>
);
export default UserList