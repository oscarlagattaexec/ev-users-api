'use strict';

module.exports = {
    method: 'GET',
    path: '/api/images/{name}',
    config: {
        tags: ['api'], // ADD THIS TAG FOR SWAGGER
        handler: (request, reply) => {
            // we grab the image name that is 
            // passed as a path param {name}
            // trivial way for the sake of demonstration
            const name = request.params.name;

            // log out the user's ip address.
            // we could us this to keep track
            // of where requests are coming from
            console.log(request.location);

            // we reply with the static file
            reply.file(name);
        }, // handler
        description: 'This endpoint will get the image speficified by the parameter {image-filename}'
    }
}