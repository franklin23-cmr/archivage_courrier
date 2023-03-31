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
        <DateField source="create_time" label=""  options={{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }}  />  
        <TextField source="num_ref"  label="numero de reference"/>
        <TextField source="description" label = "objet"/>
        <TextField source="information" label = "service de destinateur" />
        <DateField source="date_arrive" />
        <DateField source="date_sortie" />
        {/* <FunctionField label="information archiveur" render={record => `nom: ${record.utilisateur?.nom} prenom: ${record.utilisateur?.prenom} matricule : ${record.utilisateur?.matricule}`} /> */}
        <TextField source="etat" />
         <FunctionField label="confidentialite" render={(record) => { 
           if (record.id_niveau_archivage === 1){
                return 'normale'
           }else{
            return 'privee'
           }
        }} />
        {/* <TextField source="piece_jointe.nom" /> */}
      
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
