import { BooleanInput, CreateButton, Datagrid, DateField, DeleteButton, EditButton, List, ListContextProvider, ReferenceField, RichTextField, SearchInput, TextField, TextInput, useListContext, useRefresh } from 'react-admin';
import Typography from '@mui/material/Typography';
import { Fragment, useCallback, useEffect, useState } from 'react';
import {  useGetList, FunctionField, ArrayField, SingleFieldList, ChipField, } from 'react-admin';
import { useMediaQuery, Divider, Tabs, Tab } from '@mui/material';

const matr  = localStorage.getItem("matricule");
const tabs = [  
    { id:  `${matr}`, name: 'Boite reception' },
];

const postFilters = [
    <SearchInput source="q" alwaysOn />
    // <TextInput label="Search" source="q" alwaysOn />,
    // <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];
export const receiptBoxesList = () => {

    const mat  = localStorage.getItem("matricule");
    console.log("mon matricule" , mat );
    return (
    <List  filterDefaultValues={{ opt:`${mat}` }} sort={{ field: 'date', order: 'DESC' }} perPage={25} >
         <TabbedDatagrid />
    </List>
    )
    }

    const TabbedDatagrid = () => {
        const listContext = useListContext();
        const refresh = useRefresh();
        const mat  = localStorage.getItem("matricule");
        const { data, filterValues, setFilters, displayedFilters, isLoading, } = listContext;
        const [matricule, Setmatricule] = useState([]);
        const isXSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
        console.log("filter", filterValues.opt);
        useEffect(() => {
            if (isLoading) {
                return;
            }
            refresh()
            switch (filterValues.opt) {
                case `${mat}`:
                    Setmatricule(data);
                    break;
            }
        }, [data, isLoading, filterValues.opt , mat]);

        const handleChange = useCallback((event, value) => {
            setFilters &&
                setFilters({opt: value }, displayedFilters, false // no debounce, we want the filter to fire immediately
                );
        }, [displayedFilters,setFilters]);
        const selectedData = filterValues.opt === `${mat}` && matricule

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
                        {filterValues.opt === `${mat}` && (
                    <ListContextProvider value={{ ...listContext, ids: matricule }}>
                                <Datagrid optimized rowClick="edit" empty="missing data">
                                    <FunctionField  render={record => `${record.utilisateur.nom} ${record.utilisateur.prenom}`}  />
                                    <DateField source="create_time"  options={{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }} label=" " />  
                                    {/* <FunctionField label="test" render={record => console.log("my record reception",record)}  /> */}
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