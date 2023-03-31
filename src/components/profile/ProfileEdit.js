import { Edit, PasswordInput, required, SaveButton, SimpleForm, TextInput, Toolbar, useRecordContext } from "react-admin";

const MyToolbar = () => (
    <Toolbar>
        <SaveButton label="modifier" />
    </Toolbar>
);

const ProfileEdit = () => {
    const record = useRecordContext();
    const id = localStorage.getItem('user_id')
    console.log("profile id ----->",id);
    return (
        <Edit
            redirect={false} // I don't need any redirection here, there's no list page
            id={id}
            /*
                For the same reason, I need to provide the resource and basePath props
                which are required by the Edit component
            */
            resource="user"         
            basePath="/configuration"
            /*
                I also customized the page title as it'll make more sense to the user
            */
           title="mon profile"
        >
            <SimpleForm toolbar={<MyToolbar />}>
            {/* <TextField source="photo" /> */}
                 <TextInput source="nom" validate={required()} />
                <TextInput source="prenom" validate={required()} />

                <TextInput source="grade"   validate={required()}/>
                <TextInput source="email_address"  validate={required()} />
                <TextInput source="matricule"  hidden disabled/>
                    
                <PasswordInput source="password" validate={required()} />
             
            </SimpleForm>
        </Edit>
    );
};

export default ProfileEdit;