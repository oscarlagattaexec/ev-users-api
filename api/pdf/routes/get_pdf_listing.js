'use strict';

const Boom = require('boom');



module.exports = {
    method: 'GET',
    path: '/api/v1/pdf/files/{file*}',
    handler: {
            directory: {
                path: './',
                listing: true
            }
        }
    }