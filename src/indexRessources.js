import { Resource } from "react-admin";
import archiving from "./components/archiving";
import manageUser from "./components/manageUser";
import receiptBoxes from "./components/receiptBoxes";

export const  indexRessources= () => (
<>
        <Resource name='archivage'  options={{ label: 'archive'  }}{...archiving}  /> 
        <Resource name= 'message' options={{ label: 'Boite reception' }} {...receiptBoxes}/>
        <Resource name= "user" options={{ label: 'Gestion utilisateur' }} {...manageUser}/>
        <Resource name= "niveauArchivage" />       
</>
 )