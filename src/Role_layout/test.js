import React from 'react'
import { Admin, ListGuesser, Resource } from 'react-admin';
import jsonServerProvider from "ra-data-json-server";
import { BrowserRouter } from 'react-router-dom';
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const Test = () => (
    
     <Admin basename='/users' dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser} />
      <Resource name="posts" list={ListGuesser} />
     </Admin>

   
);
export default Test;