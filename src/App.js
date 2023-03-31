import * as React from "react";
import { Admin, CustomRoutes, ListGuesser, Resource, usePermissions, useRefresh } from "react-admin";
import { QueryClient } from 'react-query';import { Route, Routes } from 'react-router';
import catalogue from "./components/archiving";
import {MyLayout} from './Layout/MyLayout'
import { baseUrl } from "./fetchURl";
import { BrowserRouter } from 'react-router-dom';

import authProvider from "./authProvider"
import ProfileEdit from "./components/profile/ProfileEdit";
import SignIn from "./SignIn";
import { dataProvider } from "./dataProvider";
import { lightTheme } from "./Layout/themes";
import SendMessageDialog from "./components/message/SendMessageDialog";
import archiving from "./components/archiving";
import receiptBoxes from "./components/receiptBoxes";
import manageUser from "./components/manageUser";
import archivingSimpleUser from "./components/archiving/archivingSimpleUser";
import { useEffect } from "react";
import SimpleUser from "./Role_layout/SimpleUser";
import Test from "./Role_layout/test";
import { createContext } from "react";
import receiveBoxes from "./components/receiveBoxes";



const App = () => {
  const { isLoading, permissions } = usePermissions();
  const per = localStorage.getItem("permissions");
  const [role , setRole] = React.useState(null);
  
  console.log(per);
  if (per === undefined) return null 

  return  !isLoading ? (
   
  <BrowserRouter>       
   <Admin requireAuth dataProvider={dataProvider} authProvider={authProvider} loginPage={SignIn}  layout={MyLayout} 
     theme={lightTheme}>
      {console.log("perperper",per)}
        
        {per ==='admin' ? <Resource name= 'archivage' options={{ label: 'archivage' }} {...archiving}/> : null}
        {per ==='simpleUser' ? <Resource name= 'simpleUser' options={{ label: 'archivage' }} {...archivingSimpleUser}/> : null}

        <Resource name= 'message' options={{ label: 'Boite reception' }} {...receiptBoxes} />
        <Resource name= "user" options={{ label: 'Gestion utilisateur' }} {...manageUser} />
        <Resource name= "envoyer" options={{ label: 'boite envoie' }} {...receiveBoxes}/>

        {/* {permissions==='simpleUser' ? <Resource name= "simpleUser" options={{ label: 'archive'  }} {...archivingSimpleUser} /> : null } */}
      
      <CustomRoutes>
                <Route
              key="/sendmessage"
              path="/sendmessage"
              element={<SendMessageDialog/>}
          />
      </CustomRoutes>
    
    <CustomRoutes>
      <Route
              key="/configuration"
              path="/configuration"
              element={<ProfileEdit/>}
          />
    </CustomRoutes>
  
  {per => {
    <>
      {console.log("permissions apps.js",per)}
      {per ==='admin' ? <Resource name= 'archivage' options={{ label: 'archivage' }} {...archiving}/> : null}
      {per ==='simpleUser' ? <Resource name= 'simpleUser' options={{ label: 'archivage' }} {...archivingSimpleUser}/> : null}
    </>
  }}
 
</Admin> 
    </BrowserRouter>
   
  ): null 
}
export default App;

