'use strict';

const Joi = require('joi');

// we have a name parameter we used 
// in the routes/get_user.js 
const queryValidator = Joi.object({
    // it will be always a strig anyway
    // but for the sake of demo
    // but we want we can use a Regex, saying that
    // the parameter needs to be 'firstname.lastname'
    url: Joi
                .string()
                .required()
                .description('url')
                .example('http://www.execview.com')
});

module.exports = { 
    queryValidator 
};