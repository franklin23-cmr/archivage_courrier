import * as React from 'react';
import { Fragment } from 'react';
import Toolbar from '@mui/material/Toolbar';
import { DeleteButton, SaveButton, useNotify, useRecordContext, useRedirect} from 'react-admin';
import ValiderProduit from './AcceptButton';
import RefuserPoduit from './RejectButton';
import AlertDialog from './AlertDialog';

const ReviewEditToolbarProduitProposer = (props) => {
    const { resource } = props;
    const notify = useNotify();
    const redirectTo = useRedirect();
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
            {record.producteur.preinscriptionValide === 'approuve' ? (
                <Fragment>
                    <ValiderProduit/>
                    <RefuserPoduit/>
                </Fragment>
                
                ) : (
                            <Fragment>
                            {/* <SaveButton mutationOptions={{  
                            onSuccess: () => {
                                notify('updated', {
                                    type: 'info',
                                    messageArgs: { smart_count: 1 },
                                    undoable: true,
                                });
                                redirectTo('list', 'producteur');
                            },
                        }} type="button"/>  */}
                        <AlertDialog record={record}/>
                    <DeleteButton record={record} resource={resource}/>
                </Fragment>)}
    </Toolbar>
        
    )
};
export default ReviewEditToolbarProduitProposer;
