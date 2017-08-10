'use strict';

const Boom = require('boom');



module.exports = {
    method: 'GET',
    path: '/api/v1/{file*}',
    handler: {
            directory: {
                path: '.',
                listing: true,
                redirectToSlash: true,
                index: true
            }
        }
    }