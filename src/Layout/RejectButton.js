import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import ThumbDown from '@mui/icons-material/ThumbDown';
import { useTranslate, useUpdate, useNotify, useRedirect, useRecordContext, } from 'react-admin';
/**
 * This custom button demonstrate using a custom action to update data
 */
const RejectButton = () => {
    const translate = useTranslate();
    const notify = useNotify();
    const redirectTo = useRedirect();
    const record = useRecordContext();
    const [reject, { isLoading }] = useUpdate('producteur', { id: record.id, data: { preinscriptionValide: 'rejecte' }, previousData: record }, {
        mutationMode: 'undoable',
        onSuccess: () => {
            notify('rejected_success', {
                type: 'info',
                undoable: true,
            });
            redirectTo('/producteur');
        },
        onError: () => {
            notify('rejected_error', {
                type: 'warning',
            });
        },
    });
    return record && record.preinscriptionValide === 'en attente' ? (<Button color="primary" size="small" onClick={() => reject()} startIcon={<ThumbDown sx={{ color: 'red' }}/>} disabled={isLoading}>
            {translate('rejecte')}
        </Button>) : (<span />);
};
RejectButton.propTypes = {
    record: PropTypes.any,
};
export default RejectButton;
