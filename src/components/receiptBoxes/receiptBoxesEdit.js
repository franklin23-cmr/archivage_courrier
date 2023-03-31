import * as React from 'react';
import {
    BooleanInput,
    DateField,
    Edit,
    FileField,
    Form,
    Labeled,
    ReferenceField,
    ReferenceInput,
    RichTextField,
    SelectField,
    SelectInput,
    Show,
    TextField,
    TextInput,
    Toolbar,
    useRecordContext,
    useTranslate,
} from 'react-admin';
import { Link as RouterLink } from 'react-router-dom';
import { Card, CardContent, Box, Grid, Typography, Link } from '@mui/material';
import { Avatar } from '@mui/material';
import SendMessageDialog from '../message/SendMessageDialog';
import './SeeMessage.css'

const receiptBoxesEdit = () => (
    <Show component="div">
        <OrderForm />
        
    </Show>
);

const Spacer = () => <Box m={1}>&nbsp;</Box>;

const OrderForm = () => {
    const translate = useTranslate();
    const record = useRecordContext();
    {console.log("the first record deb", record);}
    return (
        <div  className='see-message-container'>
            <Box maxWidth="50em">
            <div>
            <div className='see-message-header'>
                <div className='see-message-user'>
                    <Avatar className='see-message-avatar' alt="Nyongo Ghislain" src="/static/images/avatar/1.jpg" />
                    <h6 className='message-title'>
                        From : 
                        <TextField source='id_utilisateur'/>
                    </h6>
                    <h6 className='message-title'>
                        To : 
                        <TextField source='destinateur'/>
                    </h6>
                </div>
                <p><DateField source="create_time" /></p>
            </div>
           <h6 className='message-title'>
            Objet:  <TextField source='description'  style={{}}/>
           </h6>
           <Spacer/>
            <div className='message-container'>
                <h6 className='see-message-subtitle'><i>Contenu du message : </i></h6>
                
                <div className='see-message-content'>
                    <RichTextField source="message" />
                </div>
            </div>
            <>
            <FileField source="piece_jointe" src='path' title='nom'/>    
            </>
        <div className='see-centered'>
             <SendMessageDialog   buttonName={'repondre'}  val ={`${record?.information}`}/>
        </div>
           
        </div>
        
            </Box>
        </div>
    );
};

export default receiptBoxesEdit;
