import { object } from 'prop-types';
import { createContext } from 'react';
import { baseUrl } from './fetchURl';


export const authProvider = {
    
    // called when the user attempts to log in
    login: ({ matricule, password }) =>  {
        const request = new Request(`${baseUrl}/user/connect`, {
            method: 'POST',
            body: JSON.stringify({ matricule, password }),
            headers: new Headers({
                "ngrok-skip-browser-warning": "foobar",
                'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {

                localStorage.setItem('matricule', JSON.stringify(matricule));
                //console.log("response auth provider",response.json().then((object)=>{console.log(object.prenom);}));
                    response.json()
                        .then((object)=>
                        {
                            localStorage.setItem("permissions", object.type_utilisateur)
                            localStorage.setItem('matricule', object.matricule)
                            localStorage.setItem('nom', object.nom +" "+object.prenom)
                            console.log("my precious data, object" , object);
                            console.log("object result +++++++++", object.matricule);
                            console.log("my object," ,object.id);
                            localStorage.setItem("user_id", object.id)
                        })

                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                
                return Promise.resolve();
                // return response.json();
            })
            .then()
            .then(body => {
                localStorage.setItem('auth', JSON.stringify(body));
                console.log("---->", body );
            })
            .catch(() => {
                console.log("erreur");
                throw new Error('Network error')
            });
    },
    logout: () => {
        localStorage.removeItem('permissions')
        localStorage.removeItem('matricule');
        localStorage.removeItem('user_id')
        return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: () => localStorage.getItem('matricule') ? Promise.resolve() : Promise.reject(),
    getPermissions: () => {
      
        const role = localStorage.getItem("permissions");
        localStorage.getItem('user_id')
    
        console.log( localStorage.getItem('matricule'))
        console.log("role", role);
        
        return role ? Promise.resolve(role) : Promise.reject(); 
    },
    getIdentity: () => Promise.resolve({
        id: 'user',
        fullName: localStorage.getItem('nom'),
    }),
    
  };
export default authProvider;
