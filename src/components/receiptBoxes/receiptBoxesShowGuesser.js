import { ArrayField, ChipField, Datagrid, DateField, Edit, ImageField, ImageInput, NumberField, ReferenceField, RichTextField, SelectInput, Show, SimpleForm, SimpleShowLayout, SingleFieldList, Tab, TabbedShowLayout, TextField, TextInput, useRecordContext, useResourceContext } from 'react-admin';
import { Card, CardMedia } from '@mui/material';
import { RichTextInput } from 'ra-input-rich-text';
import { useParams } from 'react-router';
import { Box, ImageList, ImageListItem, ImageListItemBar ,Typography} from '@mui/material';
import { ImageListCustom } from '../../Layout/ImageListCustom';
import { useEffect } from 'react';

const PostPanel = ({record}) => {
 
    return (
        <Card sx={{ display: 'inline-block' }}>
            <CardMedia
                component="img"
                image={record.photoURL}
                alt=""
                sx={{ maxWidth: '20em', maxHeight: '20em' }}
               
            />
            
        </Card>
    );
};



const PostEdit = () => {

    const record = useRecordContext();
    const resource = useResourceContext();
    const params = useParams()
    const photoList = record.photo
    
    console.log(photoList);
    return (
        <SimpleForm
            /* disable the app title change when shown */
            title=" "
        >

            <TextField source='nomProduit'/>
            <TextField source='prix'/>
            <ArrayField source='photo' />
            <ImageListCustom record={record.photo} />      
        </SimpleForm>
    );
};

export const FournisseurShowGuesser = (props) => {
 
    return (
        <Show {...props} aside={<Aside />} >
        <SimpleShowLayout >
            <TextField source="numero" />
            <TextField source="nom" />
            <TextField source="prenom" />
            <TextField source="nomStructure" />
            <ArrayField source="proposition">
            
            <Datagrid>
                <TextField source="description" />
                <TextField source="statut" />
                <DateField source="createdAt" />
             </Datagrid>
                    </ArrayField>
                        </SimpleShowLayout>
    </Show>
    );
};

 export default FournisseurShowGuesser



  const Aside = () => {
    const record = useRecordContext();
    const photoURL = record.proposition

    console.log("------->",photoURL);
    return(
        <Box sx={{ width: '300px', margin: '1em' }}>
        <Typography variant="h6">Instructions</Typography>
        <Typography variant="body2">
            Posts will only be published once an editor approves them
        </Typography>
        <ImageListCustom record={photoURL}/>
    </Box>
    );
   
    };

