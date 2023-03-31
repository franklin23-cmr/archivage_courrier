// import * as React from 'react';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
// import { useTranslate, useRecordContext, useNotify, useRedirect, useUpdate } from 'react-admin';
// import { stringify } from 'query-string';
// import ThumbUp from '@mui/icons-material/ThumbUp';

// const LinkToRelatedProducts = () => {
//     const translate = useTranslate();
//     const notify = useNotify();
//     const redirectTo = useRedirect();
//     const record = useRecordContext();
//     const [approve, { isLoading }] = useUpdate('produitproposer', { id: record.id, data: { statut: 'approuve' }, previousData: record }, {
//         mutationMode: 'undoable',
//         onSuccess: () => {
//             notify('approved', {
//                 type: 'info',
//                 undoable: true,
//             });
//             redirectTo('/produitProposer');
//         },
//         onError: () => {
//             notify('approved_error', {
//                 type: 'warning',
//             });
//         },
//     });
//     console.log("produit proposer id" , record);
//     if (!record)
//         return null;
//     return (<Button 
//     color="success"size="small" 
//     onClick={() => approve()} 
//     startIcon={<ThumbUp sx={{ color: 'green' }}/>} 
//     disabled={isLoading} 
//     component={Link} to={{
//             pathname: `/produitproposer/${record.id}`,
//             search: stringify({
//                 filter: JSON.stringify({id: record.id }),
//             }),
//         }} sx={{ display: 'inline-flex', alignItems: 'center' }}>
//             {/* <products.icon sx={{ paddingRight: '0.5em' }}/> */}
//             {translate('accept')}
//         </Button>);
// };
// export default LinkToRelatedProducts;



import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useTranslate, useRecordContext } from 'react-admin';
import { stringify } from 'query-string';


const LinkToRelatedProducts = () => {
    const record = useRecordContext();
    const translate = useTranslate();
    console.log("more details --- > ",record);
    
    if (!record) return null;
    return (
        <Button
            size="small"
            color="primary"
            component={Link}
            to={{
                pathname: `/proposition/${record.id}`,
            }}
            sx={{ display: 'inline-flex', alignItems: 'center' }}
        >
            {/* <products.icon sx={{ paddingRight: '0.5em' }} /> */}
            {translate('More details')}
        </Button>
    );
};

export default LinkToRelatedProducts;
