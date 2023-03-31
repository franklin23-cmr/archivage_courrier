import { Layout } from 'react-admin';
import  MyAppBar  from './MyAppBar';
import { MyMenu } from './MyMenu';
// import { ReactQueryDevtools } from 'react-query/devtools';

import React from "react";


export const MyLayout = props => (
    <>
        <Layout {...props} appBar={MyAppBar} menu={MyMenu} />
    </>

)