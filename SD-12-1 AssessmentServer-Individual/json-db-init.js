const fs = require('fs');

const defaultDB = `{
  "users": [
    {
      "id": 1,
      "first_name": "Joshua",
      "last_name": "Diaz",
      "email": "j3@example.com"
    },
    // ... resto de tus datos
  ]
}`;

function initDB() {
  fs.writeFile('./db.json', defaultDB, err => {
    if (err) console.error(err);
    else console.log("Database initialized successfully");
  });
}

module.exports = { initDB };