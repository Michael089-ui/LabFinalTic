// Task 2: listUsers()


// Esto nos permite importar la función creada en tarea 1
import {getServerURL} from "./task1.js";

// Acceder a task 1 y traer los usuarios 


export function listUsers(){
    // Acá estamos obteniendo la URL de usuarios
    const urlUsers = `${getServerURL()}/users`;
    // Fetch() obtiene los datos del endpoint
    fetch(urlUsers)
    .then(response => response.json())
    .then(data => console.log(data));

    //return urlUsers;
}

listUsers();
//console.log(listUsers);


