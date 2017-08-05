'use strict';

const Hapi = require('hapi');

// Starting a Hapi server simply requires
// an instance of Hapi.Server. We leave it
// bare or we can add some configuration
const server = new Hapi.Server();

// We need to specify a connection, which
// we can default to the port specified in
// an ENV variable, or 3001 if none is set.
// We also need to configure CORS for requests
// coming from a single page app
server.connection({
    port: 3000,
    routes: {
        cors: {
            origin: ['*']
        }
    }
});

// We're defining our route configuration in separate files
// and creating new routes with that configuration here
server.route(require('./api/users/routes/get_user'));
server.route(require('./api/users/routes/get_users'));

// Starting the server is as simple as calling
// server.start. We can throw an error if something
// goes wrong
server.start(err => {
    if (err) throw err;
    console.log(`server listening on port ${server.info.port}`);
});


