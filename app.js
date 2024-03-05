require('dotenv').config(); // Load environment variables from .env file
const Server = require('./server');
const server = new Server();
server.listen();