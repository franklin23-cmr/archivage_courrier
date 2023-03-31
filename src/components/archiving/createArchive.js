import { Create, DateInput, Edit, FileField, FileInput, NumberInput, required, SelectInput, SimpleForm, TextInput, useNotify, usePermissions, useRefresh } from 'react-admin';
import { useNavigate } from 'react-router';
import { baseUrl, relativeUrlArchive } from '../../fetchURl';

const ArchivageCreate = () => {
   
    const refresh = useRefresh();
    const navigate = useNavigate()
    const notify = useNotify()
    const user_id = localStorage.getItem("user_id")

    console.log("the user_id",user_id );
    const PostCreate = async (data) => {
         console.log("data archive create" , data);
         const formData = new FormData();
    
        formData.append('date_arrive', data.date_arrive);
        formData.append('date_sortie', data.date_sortie);
        formData.append('description', data.description);
        formData.append('destinateur', data.destinateur);
        formData.append('id_utilisateur', data.id_utilisateur);
        formData.append('type', data.type);
        formData.append('etat', data.etat);
        formData.append('information', data.information);
        formData.append('id_niveau_archivage', data.id_niveau_archivage);
        formData.append('num_ref', data.num_ref);

        // formData.append('piecesJointes',   JSON.stringify(data.piecesJointes));
        if (data.piecesJointes != null) {
        
            let piecesJointeTab = [] ;
            data.piecesJointes.forEach((pieceJointe) => {
                     console.log(pieceJointe);
                const pieceJointePayLoad = {
                    nom : pieceJointe.rawFile.path,
                    extension : pieceJointe.rawFile.type
                }
                piecesJointeTab.push(pieceJointePayLoad)
                 formData.append('files', pieceJointe.rawFile)
            });
            
            console.log(piecesJointeTab);
            formData.append('piecesJointes',JSON.stringify(piecesJointeTab));
        }
       
        console.log("data form data archive" , formData.values());
        const res = await fetch( `${baseUrl}/${relativeUrlArchive}`, {
            method: "POST",
            body: formData,
        }
        ).then((res) => res.json())
        .finally(
            ()=> refresh(),
        navigate(`/${relativeUrlArchive}`)
        )
        notify("save")
    }

 return(
    <Create>
        <SimpleForm onSubmit={PostCreate}>
            {/* <DateInput source="create_time" /> */}
            <TextInput source="type" defaultValue={'courrier'} hidden/>
            <TextInput source="num_ref" label="numero de reference" validate={[required()]}/>
            <TextInput source="description" label="objet courrier"  validate={[required()]}/>
            <TextInput source="information" label="service destinateur" validate={[required()]} />
            <DateInput source="date_arrive"  validate={[required()]}/>
            <DateInput source="date_sortie" validate={[required()]}/>
            <TextInput source="id_utilisateur" label="information sur archiveur" defaultValue={user_id} value={user_id} disabled/>
            <SelectInput source="etat"  name='etat(classé/non classé)' choices={[
                { id: 'classé', name: 'classé' },
                { id: 'non classé', name: 'non classé' },
            ]} validate={[required()]} />
            {/* <NumberInput source="id_niveau_archivage" /> */}
             <SelectInput source="id_niveau_archivage" label="normal / privé" name='id_niveau_archivage' choices={[
                { id: 1, name: 'normal' },
                { id: 2, name: 'privé' },
            ]} validate={[required()]} />
            {/* <TextInput source="piece_jointe" /> */}
            <FileInput source="piece_jointe" name='piecesJointes' multiple={true}>
                <FileField source="src" title="title" />
            </FileInput>
        </SimpleForm>
    </Create>
 );
};

export default ArchivageCreate