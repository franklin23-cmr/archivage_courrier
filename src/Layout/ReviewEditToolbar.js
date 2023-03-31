import * as React from 'react';
import { Fragment } from 'react';
import Toolbar from '@mui/material/Toolbar';
import { SaveButton, DeleteButton, useRecordContext, useNotify, useRedirect, } from 'react-admin';
import AcceptButton from './AcceptButton';
import RejectButton from './RejectButton';
import AlertDialog from '../components/fournisseur/AlertDialog';

const ReviewEditToolbar = (props) => {
    const { resource } = props;
    const redirect = useRedirect();
    const notify = useNotify();
    const record = useRecordContext(props);

    if (!record)
        return null;
    return(
    
    <Toolbar sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            justifyContent: 'space-between',
            minHeight: { sm: 0 },
        }}>
            {record.preinscriptionValide === 'en attente' ? (
                <Fragment>
                    {record.produitpropose.length === 0 ? 
                            <> <AlertDialog record={record}/> </>  : <><AcceptButton/></>}
                    {/* <AcceptButton /> */}
                    <RejectButton />
                </Fragment>
                
                ) : (
                            <Fragment>
                            <SaveButton mutationOptions={{
                
                onSuccess: () => {
                    notify('updated', {
                        type: 'info',
                        messageArgs: { smart_count: 1 },
                        undoable: true,
                    });
                    redirect('list', 'producteur');
                },
            }} type="button"/>
                    <DeleteButton record={record} resource={resource}/>
                </Fragment>)}
    </Toolbar>
        
    )
};
export default ReviewEditToolbar;
