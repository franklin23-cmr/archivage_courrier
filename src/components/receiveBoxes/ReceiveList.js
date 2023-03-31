import { BooleanInput, CreateButton, Datagrid, DateField, DeleteButton, EditButton, List, ListContextProvider, ReferenceField, RichTextField, SearchInput, TextField, TextInput, useListContext, useRefresh } from 'react-admin';
import Typography from '@mui/material/Typography';
import { Fragment, useCallback, useEffect, useState } from 'react';
import {  useGetList, FunctionField, ArrayField, SingleFieldList, ChipField, } from 'react-admin';
import { useMediaQuery, Divider, Tabs, Tab } from '@mui/material';

const matr  = localStorage.getItem("user_id");
const tabs = [  
    { id:  `${matr}`, name: 'Boite envoie' },
];

const postFilters = [
    <SearchInput source="q" alwaysOn />
    // <TextInput label="Search" source="q" alwaysOn />,
    // <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];
export const ReceiveList = () => {


    const user_id  = localStorage.getItem("user_id");
    // console.log("mon matricule" , mat );
    console.log("userid receive LIst", user_id);
    return (
    <List  filterDefaultValues={{ opt:`${user_id}` }} sort={{ field: 'date', order: 'DESC' }} perPage={25} >
         <TabbedDatagrid />
    </List>
    )
    }

    const TabbedDatagrid = () => {
        const listContext = useListContext();
        const refresh = useRefresh();
        const user_id  = localStorage.getItem("user_id");
        const { data, filterValues, setFilters, displayedFilters, isLoading, } = listContext;
        const [userID, SetUserID] = useState([]);
        const isXSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
        console.log("filter", filterValues.opt);
        console.log("filter user_id", user_id);
        useEffect(() => {
            if (isLoading) {
                return;
            }
            refresh()
            switch (filterValues.opt) {
                case `${user_id}`:
                    SetUserID(data);
                    break;
            }
        }, [data, isLoading, filterValues.opt , user_id]);

        const handleChange = useCallback((event, value) => {
            setFilters &&
                setFilters({opt: value }, displayedFilters, false // no debounce, we want the filter to fire immediately
                );
        }, [displayedFilters,setFilters]);
        const selectedData = filterValues.opt === `${user_id}` && userID

        return (
    <Fragment>
                <Tabs variant="fullWidth" centered value={filterValues.opt} indicatorColor="primary" onChange={handleChange}>
                    {tabs.map(choice => (<Tab key={choice.id} label={choice.name } value={choice.id}/>))}
                </Tabs>
                <Divider />
        
        {isXSmall ? (
                    <ListContextProvider value={{ ...listContext, data: selectedData }}>
                    
                    </ListContextProvider>) 
                    : (<>
                        {filterValues.opt === `${user_id}` && (
                    <ListContextProvider value={{ ...listContext, ids: userID }}>
                                <Datagrid optimized rowClick="edit" empty="missing data">
                                    {/* <TextField source="id_utilisateur" /> */}
                                    {/* <TextField source="utilisateur.prenom" /> */}
                                    {/* <FunctionField label="test" render={record => console.log("my record",record)}  /> */}
                                    <FunctionField label="nom & prenom" render={record => `${record.utilisateur.nom} ${record.utilisateur.prenom}`} />
                                    <DateField source="create_time"  options={{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }} label=" " />  
                                    <FunctionField label="matricule" render={record => `${record.utilisateur.matricule}`} />
                                    <FunctionField label="destinateur" render={record => ` A:  ${record.destinateur}`} />
                                    {/* <ReferenceField source="utilisateur" reference="id_utilisateur" label="nom" >
                                        <TextField source='nom' />
                                    </ReferenceField>  */}
                                    <TextField source="description"  label ="objet du message"/>
                                    <RichTextField source="message" stripTags />
                
                                    <DeleteButton/>
                                </Datagrid>
                     </ListContextProvider>
                     )
                        }

                    </>)}
    </Fragment>
    );
    };