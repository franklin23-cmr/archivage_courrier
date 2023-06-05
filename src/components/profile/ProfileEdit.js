import { Edit, FunctionField, ImageField, ImageInput, PasswordInput, required, SaveButton, SimpleForm, TextField, TextInput, Toolbar, useGetIdentity, useNotify, useRecordContext, useRedirect, useRefresh } from "react-admin";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router";
import Image from 'react-bootstrap/Image';
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
    alert(JSON.stringify(data));
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
            <SimpleForm  onSubmit={PostCreate} toolbar={<MyToolbar/>}>
            {/* <TextField source="photo" /> */}

                <FunctionField label="Name" render={(record) => {

                    return record.photo ? (
                        <ImageField source="photo.path" 
                        sx={{ '& img': { maxWidth: 600, maxHeight: 300, objectFit: 'contain' } }}
                        title="title" />
                    ):(
                        <Image src="holder.js/171x180" thumbnail />
                        )
                }}
                     />

                {/* <ImageField source="photo.path" 
                    sx={{ '& img': { maxWidth: 600, maxHeight: 300, objectFit: 'contain' } }}
                    title="title" /> */}

                <ImageInput source="photo" label="changer son profile">
                    <ImageField source="photo" />
                </ImageInput> 

                <TextInput source="nom" validate={required()} />
                <TextInput source="prenom" validate={required()} />
                <TextInput source="grade" validate={required()}/>
                <TextInput source="email_address" validate={required()} />
                <TextInput source="matricule" disabled/>
                <PasswordInput source="password"  defaultValue="1234@1234" value="1234@1234" validate={required()} />             
            </SimpleForm>
        </Edit>
    );
};

export default ProfileEdit;


export const MyToolbar = () => {

    const { getValues } = useFormContext();
    const { isLoading, error, data, refetch } = useGetIdentity();
    const redirect = useRedirect();
    const refresh = useRefresh();
    const navigate = useNavigate()
    const notify = useNotify()
    const user_id = localStorage.getItem("user_id")
    console.log("the user_id",user_id );

    
    const handleClick = async e => {
        e.preventDefault(); // necessary to prevent default SaveButton submit logic
        const { id, ...data } = getValues();
        console.log("my data", data);
        const formData = new FormData();
        
       formData.append('email_address', data.email_address);
       formData.append('grade', data.grade);
       formData.append('matricule', data.matricule);
       formData.append('nom', data.nom);
       formData.append('password', data.password);
       formData.append('type_utilisateur', data.type_utilisateur);
       formData.append('prenom', data.prenom);
       // formData.append('piecesJointes',   JSON.stringify(data.piecesJointes));
       if (data.photo.rawFile) {
        alert(JSON.stringify(data.photo) );
           formData.append('file', data.photo.rawFile)   
       }
       
       const res = await fetch( `${baseUrl}/profile/${user_id}`, {
           method: "POST",
           body: formData,
       }).then((res)=> res.json())
       .then((data)=>{ 
            refresh()
            notify("save")
            alert(`------------>>>> data  ${JSON.stringify(data)}`)
            localStorage.setItem('nom', data.nom +" "+data.prenom)
            navigate(`/`)
            // refetch()
     })
       .catch(() =>{
        notify("server unvailable, save failed")
       })
    }

    const PostCreate = async (data) => {
        console.log("create and user" , data);
        alert(`view data ${JSON.stringify(data)}`);
        
   }


   return ( 

    <Toolbar type="button">
        <SaveButton type="button" onClick={handleClick} />
    </Toolbar>
   )

};
