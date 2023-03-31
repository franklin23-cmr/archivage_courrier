import * as React from "react";
import { Admin, CustomRoutes, ListGuesser, Resource, usePermissions } from "react-admin";
import { QueryClient } from 'react-query';import { Route, Routes } from 'react-router';



import { BrowserRouter } from 'react-router-dom';
import authProvider from "../authProvider";
import { dataProvider } from "../dataProvider";
import { MyLayout } from "../Layout/MyLayout";
import { lightTheme } from "../Layout/themes";
import SignIn from "../SignIn";








const Main = () => {
  let { permissions }= usePermissions();
  const queryClient = new QueryClient({
      defaultOptions: {
          queries: {
              staleTime: 5 * 60 * 1000, // 5 minutes
          },
      },
  });

  // useEffect(()=>{
  //   const admin  ={ ...permissions === 'admin' ? true : false }
  //   const simpleUser  ={ ...permissions === 'simpleUser' ? true : false }
  //   const superUser  ={ ...permissions === 'superUser' ? true : false }
  //   console.log("admin", admin , "superUSer", superUser , "simpleUser", simpleUser)
  // }, permissions)

  // const lt ={ ...permissions !== 'admin' | permissions !== 'superUSer' ? <text>archivage</text> : <text>archivage/simpleUser</text>}
  // //const mat = localStorage.getItem("matricule")
  // console.log("apps .....");
  // console.log("apps lt ",lt.props.children)
  const admin  ={ ...permissions === 'admin' ? true : false }
  const simpleUser  ={ ...permissions === 'simpleUser' ? true : false }
  const superUser  ={ ...permissions === 'superUser' ? true : false }
  if (admin) {
    console.log("admin",true);
  }
  if (simpleUser) {
    console.log("simpleUser",true);
  }
  if (superUser) {
    console.log("superUser",true);
  }
  
  return (
   
    <BrowserRouter>
      
    <Admin requireAuth authProvider={authProvider} loginPage={SignIn}   layout={MyLayout} dataProvider={dataProvider} queryClient={queryClient} theme={lightTheme}>
   
    {/* {alert("admin")} */}
          
        {/* <Resource name= "simpleUser" options={{ label: 'archive'  }}{...archivingSimpleUser} />
        <Resource name='archivage'  options={{ label: 'archive'  }} {...archiving}  /> 
        <Resource name= 'message' options={{ label: 'Boite reception' }} {...receiptBoxes}/>
        <Resource name= "user" options={{ label: 'Gestion utilisateur' }} {...manageUser}/> */}
    
     
     
    </Admin>  
  
    </BrowserRouter>
   
  )

}

export default Main;

