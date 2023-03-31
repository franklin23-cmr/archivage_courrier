import { ChipField, Datagrid, DateField, List, NumberField, ReferenceField, TextField , Show, SimpleShowLayout, EditButton, required, BooleanField, DeleteButton, usePermissions, TopToolbar, CreateButton, ExportButton, DateInput, FilterButton } from 'react-admin';
import { FunctionField } from 'react-admin';
import { SearchInput, TextInput } from 'react-admin';

const postFilters = [
    <SearchInput source="q" alwaysOn />,
    <TextInput label="objet courrier" source="obj" defaultValue=" " />,
    <TextInput label="service destinateur" source="srv_dest" defaultValue=" " />,
    <DateInput source="gte" label="date" />,
    // <NumberField source="released_lte" label="Released before" />
    // <TextInput label="Search" source="q" alwaysOn />,
    // <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];

const validate = (value) => {
    console.log(value);
    if (value < 0) {
        return 'quanite doit etre prositive';
    }
    return undefined;
}

const PostListActions = (state) => (
    <TopToolbar>
    { state.state === 'admin' ? 
        <>
        <CreateButton />
        <ExportButton />
        <FilterButton filters={postFilters}/>
        </>
    : null }
    </TopToolbar>
);

export const ArchivageList = () => {
    const { permissions } = usePermissions();
    console.log("archiving permission", permissions);

    return (
    <List actions={<PostListActions state={permissions} />} filters={postFilters}>
        {console.log("archiving permission", permissions)}
    <Datagrid rowClick="edit">
        <DateField source="create_time"  options={{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }} label=" " />  
        <TextField source="num_ref"  label="numero de reference"/>
        <DateField source="date_arrive"  label="date arrivee"/>
        <DateField source="date_sortie"  label="date sortie" />
        <TextField source="description" label = "objet"/>
        <TextField source="information" label = "service de destinateur" />
        {/* <TextField source="message" /> */}
    
        {permissions === 'admin' &&
            <>
            <EditButton/>
            <DeleteButton/>
            </>
        }
    </Datagrid>
</List>
    );
};

export default ArchivageList
