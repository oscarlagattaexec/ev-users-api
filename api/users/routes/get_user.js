'use strict';

const usersData = require('../../../data/users');

module.exports = {
    method: 'GET',
    path: '/api/users/{userName}',
    config: {
        handler: (request, reply) => {
            let user = usersData.find(
                user => user.userName === request.params.userName
            );
            
            if(!user){
                return reply({message: 'user not found'});
            }
            reply(user);
        }
    }
}