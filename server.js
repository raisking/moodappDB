// webserver.js
//load module http
const http = require('http');
//add express middleware
const app = require('./serverside/app');

//create a new instance of http.Server 
//Reference https://nodejs.org/api/http.html#http_http_createserver_options_requestlistener
const server = http.createServer(app);
server.listen(process.env.MONGODB_URI || 8000);
console.log('Server running on port 8000.');
console.log('Control + c to exit');