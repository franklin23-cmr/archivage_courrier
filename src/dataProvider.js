import jsonServerProvider from 'ra-data-json-server';
import { baseUrl } from './fetchURl';

const baseDataProvider = jsonServerProvider(baseUrl);

export const dataProvider = {
    ...baseDataProvider,
    banUser: (statusUser,matricule) => {
        return fetch(`/message/${statusUser}/${matricule}/ban`, { method: 'GET' })
            .then(response => response.json());
    },
}