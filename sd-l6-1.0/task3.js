// Task 3: addUser(first_name, last_name, email)

import { getServerURL } from "./task1.js";

// Añadir usuarios
function addUser(first_name, last_name, email) {
  // Listar usuarios del endpoint
  const urlUsers = `${getServerURL()}/users`;

  // Fetch() obtiene los datos del endpoint
  fetch(urlUsers)
    .then(response => response.json())
    .then(data => {
      let maxId = 0; // se debe poder reasignar

      for (let i = 0; i < data.length; i++) {
        const usuario = data[i];

        // Evaluar si el ID almacenado es mayor al id máximo
        if (usuario.id >= maxId) {
          maxId = usuario.id;
          console.log(maxId);
        }
      }

      // Crear el nuevo usuario
      const newUser = { id: ++maxId, first_name, last_name, email };

      return fetch(urlUsers, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json; charset=UTF-8"
        }
      });
    })
    .then(res => res.json())
    .then(data => console.log("Usuario creado:", data))
    .catch(err => console.error(err));
}

addUser("Michael", "Corrales", "corralesmendezm@gmail.com");
