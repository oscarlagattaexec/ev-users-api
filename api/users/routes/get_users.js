'use strict';

const usersData = require('../../../data/users');
const sortBy = require('lodash').sortBy;

module.exports = {
    method: 'GET',
    path: '/api/users',
    config: {
        handler: (request, reply) => {

            // specify the data I want
            const usersReducedData = usersData.map(
                user => {
                    return {
                        id: user.id,
                        name: user.name,
                        userName: user.userName
                    }
                }
            )

            const sortDirection = request.query.sortDirection;
            const sortKey = request.query.sortKey;

            const sortData = (data, direction, key) => {
                if (direction === 'asc')
                {
                    return sortBy(data, key);   
                } else if (direction === 'desc')
                {
                    return sortBy(data, key).reverse();   
                } else {
                    return data;
                }
            }
            
            reply(sortData(usersReducedData, sortDirection, sortKey));
        }
    }
}