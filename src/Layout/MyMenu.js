
import CreateIcon from '@mui/icons-material/Create';
import ArchiveIcon from '@mui/icons-material/Archive';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import ListItemIcon from '@mui/material/ListItemIcon';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Grid3x3Icon from '@mui/icons-material/Grid3x3';
import { AutocompleteArrayInput, Count, RadioButtonGroupInput, useCreatePath, useRefresh, useStore } from 'react-admin';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import EventAvailableSharpIcon from '@mui/icons-material/EventAvailableSharp';
import { MenuList, MenuItem, ListItemText } from '@mui/material';
import { isEqual } from 'lodash';
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { useTranslate, MenuItemLink, useSidebarState, Menu, usePermissions, } from 'react-admin';
import SendMessageDialog from '../components/message/SendMessageDialog';
import { Link } from 'react-router-dom';

export const MyMenu  = ({ dense = false }) => {
 
    const { permissions } = usePermissions();
    const refresh = useRefresh();
    const translate = useTranslate();
    const [open] = useSidebarState();
    const handleSubmit = (event) => {
        event.preventDefault();
        const mat = localStorage.getItem("matricule")
      
    }
    const mat = localStorage.getItem("matricule")
    console.log("my mat ....." , mat );
    return (
    
    <Box sx={{
            width: open ? 200 : 50,
            marginTop: 1,
            marginBottom: 1,
            transition: theme => theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        }}>
        
        {permissions !== "simpleUser" ? <SendMessageDialog buttonName={'Message'}/>: null}
        {permissions !== "simpleUser" ? <Menu.Item to= '/message'  primaryText="Boite reception" leftIcon={<EmailIcon/>} color="primary"/> : null }   
        {permissions !== "simpleUser" ? <Menu.Item to= '/envoyer'  primaryText="Boite envoie" leftIcon={<EmailIcon/>} color="primary"/> : null }
        <Menu>
            {permissions === "admin" ? <Menu.Item to="/archivage" state={{ _scrollToTop: true }} primaryText={translate(`Archive`, )} leftIcon={<ArchiveIcon />} dense={dense} /> : null}
            {/* <Link to={createPath({ resource: 'message/admin', type: 'edit', id: `${mat}` })}>My favorite post</Link> */}
            {permissions ==='simpleUser'? <Menu.Item to="/simpleUser" state={{ _scrollToTop: true }} primaryText={translate(`Archive`,)} leftIcon={<ArchiveIcon />} dense={dense} re />: null}
            {permissions ==='superUser'? <Menu.Item to="/archivage" state={{ _scrollToTop: true }} primaryText={translate(`Archive`, )} leftIcon={<ArchiveIcon />} dense={dense} />: null}
        </Menu>
        <Box
             sx={{
                height:40,
                width:200,
                marginTop:3,
                marginBottom:2,
            }} 
        >
        {permissions === 'admin'  ?
            <Menu.Item to="/user" primaryText="Gestion utilisateur" leftIcon={<PeopleIcon/>}/> :null }
           
            <Menu.Item to="/configuration" primaryText="Paramètres"  leftIcon={<SettingsIcon/>} /> 
        </Box>
        </Box>
        
        );
};

