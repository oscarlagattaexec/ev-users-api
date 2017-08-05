'use strict';

const Boom = require('boom');
const usersData = require('../../../data/users');

const query = require('./../queries/users');

module.exports = {
    method: 'GET',
    path: '/api/users/{userName}',
    config: {
    pre: [
      { method: query.getGithubImage, assign: 'image' },
    ]
    },
    handler: (request, reply) => {
        let user = usersData.find(
            user => user.userName === request.params.userName
        );
        
        if(!user){
            return reply(Boom.notFound('User not found'));
        }

        user.avatar = request.pre.image;

        reply(user);
    }
}