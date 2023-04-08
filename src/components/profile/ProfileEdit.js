import { Edit, ImageField, ImageInput, PasswordInput, required, SaveButton, SimpleForm, TextField, TextInput, Toolbar, useNotify, useRecordContext, useRefresh } from "react-admin";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router";
import { baseUrl } from "../../fetchURl";


const ProfileEdit = () => {

    const record = useRecordContext();
    const id = localStorage.getItem('user_id')
    const refresh = useRefresh();
    const navigate = useNavigate()
    const notify = useNotify()
    console.log("profile id ----->",id);

    const PostCreate = async (data) => {
    console.log("create and for one user", data);
    }

    return (
        <Edit
            redirect={false} // I don't need any redirection here, there's no list page
            id={id}
            /*
                For the same reason, I need to provide the resource and basePath props
                which are required by the Edit component
            */
            resource="user"         
            /*
                I also customized the page title as it'll make more sense to the user
            */
           title="mon profile"
        >
            <SimpleForm  onSubmit={PostCreate}>
            {/* <TextField source="photo" /> */}
               
                <ImageField source="photo.path" 
                    sx={{ '& img': { maxWidth: 50, maxHeight: 50, objectFit: 'contain' } }}
                    title="title" />

                <ImageInput source="photo" label="changer son profile">
                    <ImageField source="photo" />
                </ImageInput> 

                <TextInput source="nom" validate={required()} />
                <TextInput source="prenom" validate={required()} />
                <TextInput source="grade" validate={required()}/>
                <TextInput source="email_address" validate={required()} />
                <TextInput source="matricule" disabled/>
                <PasswordInput source="password"  validate={required()} />             
            </SimpleForm>
        </Edit>
    );
};

export default ProfileEdit;