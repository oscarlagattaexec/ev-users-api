'use strict';

const Boom = require('boom');

const queryValidator = require('./../validation/get_pdf').queryValidator;

const query = require('./../queries/get_pdf');
const path =  require('path');

module.exports = {
    method: 'GET',
    path: '/api/v1/pdf',
    config: {
        validate: {
            query: queryValidator
        },
        pre: [{ method: query.getPdfFileName, assign: 'fileName' }],
        handler: (request, reply) => {

            if(!request.pre.fileName){
                return reply(Boom.notFound('pdf file not generated'));
            }

            const pathFile = path.join(process.cwd(), 'public');
            console.log(`${pathFile}\\${request.pre.fileName}`);

            reply.file(`${pathFile}\\${request.pre.fileName}`);
            // reply({
            //     message: 'pdf generated'
            // });
        }, // handler
        description: 'This endpoint will get a pdf file'
    } 
}