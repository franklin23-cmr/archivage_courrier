import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';

export default function AlertDialog({record}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <Button variant="outlined"  color='warning' onClick={handleClickOpen}>
            Important
    </Button>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {/* <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle> */}
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
            Vous devez d'abord approuve la demande du fournisseur avant 
            de pouvoir valider ou rejete ces produits
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>fermer</Button>
        <Button  
            size="small"
            color="primary"
            component={Link}
            to={{
                pathname:`/producteur/${record.producteurId}`,
            }} 
            autoFocus>
          retourner vers la table fournisseur
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  );
}