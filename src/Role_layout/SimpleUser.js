// import React from 'react'
// import { Admin, ListGuesser, Resource } from 'react-admin';
// import jsonServerProvider from "ra-data-json-server";
// import { BrowserRouter } from 'react-router-dom';
// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

// const SimpleUser = () => (
    
//      <Admin basename='/' dataProvider={dataProvider}>
//       <Resource name="photos" list={ListGuesser} />
//       <Resource name="posts" list={ListGuesser} />
//      </Admin>

   
// );
// export default SimpleUser;


import React from 'react'
import { Admin, CustomRoutes } from 'react-admin'
import { Route } from 'react-router'
import authProvider from '../authProvider'
import SendMessageDialog from '../components/message/SendMessageDialog'
import ProfileEdit from '../components/profile/ProfileEdit'
import { dataProvider } from '../dataProvider'
import { MyLayout } from '../Layout/MyLayout'
import { lightTheme } from '../Layout/themes'
import SignIn from '../SignIn'

function SimpleUser() {
  return (
    <Admin  requireAuth authProvider={authProvider} loginPage={SignIn} >
    {/* <Resource name= "simpleUser" options={{ label: 'archive'  }}{...archivingSimpleUser} /> */}
    {/* {console.log("the my permissions permissions apps.js",permissions)} */}
    {/* <Resource name='archivage'  options={{ label: 'archive'  }} {...archiving}  /> 
    <Resource name= 'message' options={{ label: 'Boite reception' }} {...receiptBoxes}/>
    <Resource name= "user" options={{ label: 'Gestion utilisateur' }} {...manageUser}/> */}

  <CustomRoutes>
            <Route
           key="/sendmessage"
           path="/sendmessage"
           element={<SendMessageDialog/>}
       />

    <Route
           key="/configuration"
           path="/configuration"
           element={<ProfileEdit/>}
       />

  </CustomRoutes>


 
</Admin> 

  )
}

export default SimpleUser