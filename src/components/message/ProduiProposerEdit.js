
import { Edit, NumberField, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput, useRefresh } from 'react-admin';
import { useNavigate } from 'react-router';
import { baseUrl } from '../../fetchURl';
import { ImageListCustom } from './ImageListCustom';
import ReviewEditToolbarProduitProposer from './ReviewEditToolbar';




export const ProduitproposerEdit = () => { 
    
    const refresh = useRefresh()
    const navigate = useNavigate();

const PostCreate = async (data) => {
    const formData = new FormData();
    const id = data.id;
    console.log("edit produit" , data)
    // formData.append("categorieproduitId" , JSON.stringify(data.categorieproduitId))
    // formData.append('catalogue', JSON.stringify(data.catalogue) );
    // formData.append('producteur_has_produit', JSON.stringify(data.producteur_has_produit) );
         formData.append('prix', data.prix);
         formData.append('statut',"approuve");
         formData.append('updatedAt', data.updatedAt)
    // formData.append('description', data.description)
         formData.append('conditionnement', data.conditionnement)
     
    const res = await fetch( baseUrl+"/proposition/"+id , {
        method: 'PUT',
        body: formData,
     }).then((res) => res.json())
            .finally(()=>  
            refresh(),
            navigate("/proposition"))
        console.log(res);
    
}


    return(
        <Edit>
         <SimpleForm onSubmit={PostCreate} toolbar={<ReviewEditToolbarProduitProposer/>}>
            <ImageListCustom />
            <ReferenceInput source="producteurId" reference="producteur" >
                <SelectInput optionText="nom" disabled />
            </ReferenceInput>
            <TextInput source="nomProduit" disabled/>
            <NumberInput source="producteur.numero"  label="numero producteur" disabled/>
            <TextInput source="prix" />
            <TextInput source="conditionnement" />
            <TextInput source="periodicteAnnuel"  disabled/>
            <TextInput source="saisonnier"  disabled/>

        </SimpleForm>
    </Edit>    
    )
};