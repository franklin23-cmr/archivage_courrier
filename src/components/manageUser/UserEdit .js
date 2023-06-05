
import { DateInput, Edit, ImageField, ImageInput, PasswordInput, SelectInput, SimpleForm, TextInput, useNotify, useRefresh } from 'react-admin';
import { baseUrl } from '../../fetchURl';
import { useNavigate } from 'react-router';


export const UserEdit = () => {

    const refresh = useRefresh();
    const navigate = useNavigate()
    const notify = useNotify()

    
    const PostCreate = async (data) =>{

        alert(JSON.stringify(data));
        console.log("test",data)
        const formData = new FormData();    
        formData.append('email_address', data.email_address);
        formData.append('grade', data.grade);
        formData.append('matricule', data.matricule);
        formData.append('nom', data.nom);
        formData.append('password', data.password);
        formData.append('type_utilisateur', data.type_utilisateur);
        formData.append('prenom', data.prenom);
        // formData.append('piecesJointes',   JSON.stringify(data.piecesJointes));
        if (data.photoFile.rawFile) {
        alert(JSON.stringify(data.photo));
            formData.append('file', data.photoFile.rawFile)   
        }
        const res = await fetch( `${baseUrl}/user/${data.id}`, {
               method: "PUT",
               body: formData,
           }).then((res)=> res.json())
           .then((data)=>{ 
                refresh()
                notify("save")
                alert(`------------>>>> data  ${JSON.stringify(data)}`)
                navigate(`/user`)
         })
           .catch(() =>{
            notify("server unvailable")
           })
    }

return (

    <Edit title={'utilisateurs'} >
        <SimpleForm onSubmit={PostCreate}>
            <ImageField source="photo.path" title='profile' />

            <ImageInput source="photoFile" label="changer son profile">
                    <ImageField source="photoFile" />
            </ImageInput>

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
    )
};