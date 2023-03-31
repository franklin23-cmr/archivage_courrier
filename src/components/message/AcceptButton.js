import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import ThumbUp from '@mui/icons-material/ThumbUp';
import { useTranslate, useUpdate, useNotify, useRedirect, useRecordContext, SaveButton, } from 'react-admin';
/**
 * This custom button demonstrate using useUpdate to update data
 */
const ValiderProduit = () => {
    const translate = useTranslate();
    const notify = useNotify();
    const redirectTo = useRedirect();
    const record = useRecordContext();
    console.log("acccept button ",record);
    
    const [approve, { isLoading }] = useUpdate('proposition', { id: record.id, data: { statut: 'approuve' },
        
        previousData: record }, {
        mutationMode: 'undoable',
        onSuccess: () => {
            notify('approved', {
                type: 'info',
                undoable: true,
            });
            redirectTo('/proposition');
        },
        onError: () => {
            notify('approved_error', {
                type: 'warning',
            });
        },
    });
    return record && record.statut !== 'approuve'  ? (
        // <Button  color="success"size="small" 
        //     onClick={() => approve()} 
        //     startIcon={<ThumbUp sx={{ color: 'green' }}/>} 
        //     disabled={isLoading} >
        //     {translate('Valider Produit')}
        // </Button>
         <SaveButton label='Valider Produit' icon={<ThumbUp sx={{ color: 'green' }}/>} disabled={isLoading}  alwaysEnable variant="text" sx={{ color: 'success.main',
          }}/>  
        ) : (<span />);
};
ValiderProduit.propTypes = {
    record: PropTypes.any,
};
export default ValiderProduit;
