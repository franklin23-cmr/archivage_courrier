import jsonServerProvider from 'ra-data-json-server';
import { baseUrl } from './fetchURl';
import { fetchUtils } from 'react-admin';

const fetchJson = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
        
    }
    // add your own headers here
    options.headers.set('ngrok-skip-browser-warning', 'foobar');
    options.headers.set('Access-Control-Expose-Headers', 'X-Custom-Header');
    return fetchUtils.fetchJson(url, options);
}

const baseDataProvider = jsonServerProvider(baseUrl,fetchJson);

export const dataProvider = {
    ...baseDataProvider,
    banUser: (statusUser,matricule) => {
        return fetch(`/message/${statusUser}/${matricule}/ban`, { method: 'GET' })
            .then(response => response.json());
    },
}