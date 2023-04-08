
import { DateInput, Edit, ImageField, PasswordInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

export const UserEdit = () => (
    <Edit title={'utilisateurs'} >
        <SimpleForm>
            <ImageField source="photo.path" title='profile' />
            <TextInput source="nom" />
            <TextInput source="prenom" />
            <TextInput source="grade" />
            <SelectInput source="type_utilisateur"  label="type utilisateur" choices={[
                { id: 'simpleUser', name: 'simple utilisateur' },
                { id: 'superUser', name: 'super utilisateur' },
            ]} />
            <TextInput source="email_address" />
            <TextInput source="matricule" />
            <PasswordInput source="password" defaultValue={"password"}/>
            
        </SimpleForm>
    </Edit>
);