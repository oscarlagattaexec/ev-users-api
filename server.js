'use strict';

// Hapy ecosystem
const Hapi = require('hapi');
const Inert = require('inert');
const Geolocate = require('hapi-geo-locate');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');

// NODE
const path = require('path');
const Pack = require('./package');

// Starting a Hapi server simply requires
// an instance of Hapi.Server. We leave it
// bare or we can add some configuration
const server = new Hapi.Server({
    // tell Hapi where the public assets are
    connections: {
        routes: {
            files: {
                relativeTo: path.join(__dirname, 'public')
            }
        }
    }
});

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

// The simple way to register a plugin
// is to pass the module and a callback
server.register( Inert, ()=>{});

// To configure the plugin, we can pass 
// an object which has an options key 
server.register({
    register: Geolocate,
    options: {
        enabledByDefault: true
    }
}, err => console.log(err));


// If you want to view the documentation from the API 
// you need to install the inert and vision plugs-ins 
// which support templates and static content serving.
server.register(Vision, ()=> {});
server.register({
    register: HapiSwagger,
    options: {
        info: {
            'title': 'Execview Hapi API POC for pdf rendering',
            'version': Pack.version
        }
    }
}, error => console.log(error));

// We're defining our route configuration in separate files
// and creating new routes with that configuration here
server.route(require('./api/users/routes/get_user'));
server.route(require('./api/users/routes/get_users'));
server.route(require('./api/users/routes/post_user'));
server.route(require('./api/images/routes/get_image'));
server.route(require('./api/pdf/routes/get_pdf_listing'));
server.route(require('./api/pdf/routes/get_pdf'));


// Starting the server is as simple as calling
// server.start. We can throw an error if something
// goes wrong
server.start(err => {
    if (err) throw err;
    console.log(`server listening on port ${server.info.port}`);
});