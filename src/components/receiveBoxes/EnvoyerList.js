// import React from 'react'

// function receiveBoxes() {
//   return (
//     <div>receiveBoxes</div>
//   )
// }

// export default receiveBoxes

import { ArrayField, ChipField, Datagrid, DateField, List, SingleFieldList, TextField } from 'react-admin';

export const EnvoyerList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <DateField source="create_time" />
            <TextField source="type" />
            <TextField source="destinateur" />
            <TextField source="date_arrive" />
            <TextField source="date_sortie" />
            <TextField source="description" />
            <TextField source="information" />
            <TextField source="message" />
            <TextField source="etat" />
            <TextField source="id_utilisateur" />
            <TextField source="utilisateur.id" />
            
            <ArrayField source="piece_jointe">
                <SingleFieldList><ChipField source="id" />
                    </SingleFieldList>
            </ArrayField>
            
            <TextField source="niveau_archivage" />
        </Datagrid>
    </List>
);