'use strict';

const Hapi = require('hapi');

// Create a Hapi server instance
const server = new Hapi.Server();

// Tell the server which port to listen on
server.connection({
    port: 3000
});

// Creates a basic hello route
server.route({
    method: 'GET',
    path: '/hello',
    handler: (request, reply) => {
        reply({ message: 'Hi there'});
    }
})

// Start the server and log out the URI
server.start(err => {
    if (err) throw err;
    console.log(`server listening on port ${server.info.port}`);
});


