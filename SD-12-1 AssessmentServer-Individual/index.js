// DO NOT MODIFY THIS FILE!

// This Project contains your JSON server.
const { initDB } = require('./json-db-init');
const { startServer } = require('./json-server');

console.log("Initialising Database...");
initDB();

setTimeout(() => {
  console.log("Starting server...");
  startServer();
}, 2000);