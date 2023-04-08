import { Create,  ImageField, ImageInput, PasswordInput, SelectInput, SimpleForm,  TextInput, useNotify, useRefresh,  } from 'react-admin';
import { baseUrl } from '../../fetchURl';
import { useNavigate } from 'react-router';

const UserCreate = () => {

    
    const refresh = useRefresh();
    const navigate = useNavigate()
    const notify = useNotify()
    const user_id = localStorage.getItem("user_id")
    console.log("the user_id",user_id );

    const PostCreate = async (data) => {
         console.log("create and user" , data);
         const formData = new FormData();
        
        formData.append('email_address', data.email_address);
        formData.append('grade', data.grade);
        formData.append('matricule', data.matricule);
        formData.append('nom', data.nom);
        formData.append('password', data.password);
        formData.append('type_utilisateur', data.type_utilisateur);
        formData.append('prenom', data.prenom);
        // formData.append('piecesJointes',   JSON.stringify(data.piecesJointes));
        if (data.photo != null) {
            formData.append('file', data.photo.rawFile)   
        }

        const res = await fetch( `${baseUrl}/user`, {
            method: "POST",
            body: formData,
        }
        ).then((res) => res.json())
        .finally(
            ()=> refresh(),
        navigate(`/user`)
        )
        notify("save")
    }

return(
    <Create>
        <SimpleForm onSubmit={PostCreate} >

            <ImageInput source="photo" label="add and picture">
                <ImageField source="src" title="title" />
            </ImageInput>
            
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
};   
export default UserCreate