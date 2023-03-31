import { Datagrid, DateInput, DeleteButton, FunctionField, ImageField, List, ReferenceField, TextField } from 'react-admin';


const listFilters = [
    <DateInput source="date_gte" alwaysOn  label="du" />,
    <DateInput source="date_lte" alwaysOn  label="au"/>,
];

export const ProduitproposerList = () => (
    <List
    filters={listFilters}
    perPage={25}
    >
        <Datagrid rowClick="edit" empty="missing data">
            <ReferenceField source="producteurId" reference="producteur" label="fournisseurss ">
                <FunctionField label="nom prenom" render={record => `Mr,Mme ${record.nom} ${record.prenom}`} />
            </ReferenceField>
            <TextField source="nomProduit" />
            <TextField source="conditionnement" />
            <TextField source="periodicteAnnuel" />
            <TextField source="saisonnier" />
            <TextField source="statut" />
            <TextField source="updatedAt" />
            <TextField source="producteur.numero" />
            <DeleteButton  label=''  />
        </Datagrid>
    </List>
);