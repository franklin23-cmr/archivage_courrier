import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { ChangeEvent,useState } from "react";

import CreateIcon from '@mui/icons-material/Create';
import ListItemIcon from '@mui/material/ListItemIcon';
import { MenuItem } from '@mui/material';
import { baseUrl, GetSendMessage, relativeUrlArchive} from '../../fetchURl';
import { useNotify, useRecordContext, useRefresh } from 'react-admin';
import { useNavigate } from 'react-router';
const SendMessageDialog = (props) => {
    const [open, setopen] = useState(true);
    const [show, setShow] = useState(false);
    const [value, setValue] = useState('');
    const [fileList, setFileList] = useState();
    const [matricule , setMatricule] = useState();
    const [object , setObject] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const refresh = useRefresh();
    const record = useRecordContext();
    const notify = useNotify();
    const navigate = useNavigate();
    const handleFileChange = (e) => {
        setFileList(e.target.files);
    };
    console.log("the val of the val",props.val);
    const handleUploadClick = () => {
    // if (!fileList) {
    //     return;
    // }
    const statusmessage = GetSendMessage({value , files ,object,  matricule} , `${baseUrl}/message`)
   statusmessage.then((value)=>{
    if(value==="success"){
        refresh()
        navigate(`/envoyer`)
        notify(`message envoye au matricule ${matricule}`,{type : 'success'} )
    }else{
        notify(`Erreur lors de l'envoie du message au matricule ${matricule}`,{type : 'error'} )
    }
    console.log("the value" ,value);
   })
    setShow(false)
    }

    const files = fileList ? [...fileList] : [];
  
    return (
        <>
             <MenuItem sx={{
                height:40,
                width:200,
                marginTop:3,
                marginBottom:2,
                maxWidth:'80%',
                marginLeft:'auto',
                marginRight:'auto',
                // boxShadow: '1px 2px 2px',
                backgroundColor:'#C2E7FF',
                borderRadius: '20px 20px 20px 20px',
                '&.RaMenuItemLink-active': {
                       borderRadius: '36px',
                   },
            }} 
             color="primary"
             onClick={handleShow}
             >
                    <ListItemIcon>
                        <CreateIcon/>
                    </ListItemIcon>    
                    {props.buttonName}
            </MenuItem>
            <Modal
                centered={true}
                size="lg"
                show={show}
                onHide={handleClose}

            >
                <Modal.Header closeButton >
                    <Modal.Title >Envoyer un message</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" >
                            <Form.Label > Matricule du destinataire  </Form.Label>
                            <Form.Control
                                type="text"
                                name='matricule'
                                id="matricule"
                                label="Matricule"
                                value={matricule}
                                defaultValue={props.val}
                                onChange={e => setMatricule(e.target.value)}
                                placeholder="exemple : 18p152"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label > Objet message  </Form.Label>
                            <Form.Control
                                type="text"
                                name='objet'
                                id="objet"
                                label="objet"
                                value={object}
                                defaultValue={props.val}
                                onChange={e => setObject(e.target.value)}
                                placeholder=" . . . . "
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Entrez votre message</Form.Label>
                            <ReactQuill theme="snow" value={value} onChange={setValue} />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                        <Form.Control
                                type="file"
                                title="Upload PDF"
                                name='files'
                                onChange={handleFileChange}
                                autoFocus
                                multiple
                                accept=".pdf,.doc,.docx"
                            />
                            
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Annuler
                    </Button>
                    <Button variant="primary" 
                    type="submit"
                    fullWidth 
                    onClick={handleUploadClick}
                    >
                        Envoyer
                    </Button>
                </Modal.Footer>
            </Modal>


        </>
    )
};

export default SendMessageDialog;