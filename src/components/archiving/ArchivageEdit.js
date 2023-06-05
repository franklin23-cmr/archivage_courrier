import { bool } from 'prop-types';
import { ArrayField, ArrayInput, CreateButton, DateInput, DeleteButton, Edit, ExportButton, FileField, FormTab, FunctionField, NumberInput, required, SaveButton, SelectInput, SimpleForm, SimpleFormIterator, TabbedForm, TextInput, Toolbar, TopToolbar, usePermissions, useRecordContext } from 'react-admin';
import DocViewerArchive from './DocViewerArchive';
import DocViewer from './DocViewerArchive';




const URL_file = () =>{
    
    <FunctionField label="Name" render={record => {
        console.log("recod peice jointe ",record.piece_jointe)
        let tabs = record.piece_jointe
        let str ;
        tabs.forEach(element => {
            console.log("path element is defined",element.path)
            str = element.path
            return `${element.path}`
        });
        return str
    }} 
    />
}

const MyToolbar = (state) => (
    
    <Toolbar>
        {console.log(state.state)}
    { state.state === 'admin' ? 
        <>
        <SaveButton />
        <DeleteButton/>
        </>
    : null }
    </Toolbar>
);

export const ArchivageEdit = () => {
         const {permissions} = usePermissions()
         const user_id = localStorage.getItem("user_id")
         let disability = false ;
        
    return(
    <Edit >
        <SimpleForm  toolbar={<MyToolbar  state={permissions} />} title=''>
            {permissions ==="admin" && 
            <>
            <TextInput source="type" defaultValue={'courrier'} hidden/>
            <TextInput source="num_ref"  label="numero de reference"  />
            <TextInput source="description"  label="objet courrier"/>
            <TextInput source="information" label="destinateur courrier"/>
            <DateInput source="date_arrive"  label="date arrivee" validate={[required()]}/>
            <DateInput source="date_sortie"  label="date sortie" validate={[required()]} />
            <TextInput source="id_utilisateur" defaultValue={user_id} disabled/>
             <SelectInput source="etat"  name='etat' choices={[
                { id: 'classé', name: 'classé' },
                { id: 'non classé', name: 'non classé' },
            ]} />     
            
            <SelectInput source="id_niveau_archivage"  name='id_niveau_archivage' choices={[
                { id: 1, name: 'normal' },
                { id: 2, name: 'prive' },
            ]}  /> 
            </>
          }

                {permissions !=="admin" && 
            <>
            <TextInput source="type" defaultValue={'courrier'} hidden/>
            <TextInput source="num_ref"   disabled/>
            <TextInput source="description"  disabled/>
            <DateInput source="date_arrive"  label="date arrivee" validate={[required()]}/>
            <DateInput source="date_sortie"  label="date sortie" validate={[required()]} />
            <TextInput source="information" disabled/>
            <TextInput source="id_utilisateur" defaultValue={user_id} disabled/>
             <SelectInput source="etat"  name='etat' choices={[
                { id: 'classé', name: 'classé' },
                { id: 'non classé', name: 'non classé' },
            ]}  disabled />     
            
            <SelectInput source="id_niveau_archivage"  name='id_niveau_archivage' choices={[
                { id: 1, name: 'normal' },
                { id: 2, name: 'prive' },
            ]}   disabled/> 
            </>
            }
        <FileField source="piece_jointe" src='path' title='nom'/>    
        
        </SimpleForm>
        {/* <DocViewerArchive/> */}
    </Edit>
    );
};