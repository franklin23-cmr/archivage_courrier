import { Create,  ImageField, ImageInput, PasswordInput, ReferenceInput, SelectInput, SimpleForm,  TextInput, useRefresh,  } from 'react-admin';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { baseUrl } from '../../fetchURl';
import { useNavigate } from 'react-router';

const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="photo"  />
            <TextInput source="nom" required />
            <TextInput source="prenom" required/>
            <TextInput source="grade" required/>
           
            <SelectInput source="type_utilisateur"  label="type utilisateur" choices={[
                { id: 'simpleUser', name: 'simple utilisateur' },
                { id: 'superUSer', name: 'super utilisateur' },
            ]}  required />
            <TextInput source="email_address" />
            <TextInput source="matricule"  required/>
            <PasswordInput source="password"  required/>
        </SimpleForm>
    </Create>
);

export default UserCreate