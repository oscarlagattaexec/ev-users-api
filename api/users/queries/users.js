'use strict';

// library provided for the hapi ecosystem and is 
// http client;
const Wreck = require('wreck');

const usersData = require('../../../data/users');

// When someone goes to create a new user, we
// should check whether they exist already. This is a good
// use case for route prerequisites 
const verifyUniqueUser = (request, reply) => {

  const name = request.payload.name;
  const existingUser = usersData.find(
    user => user.name === name
  );
  if (existingUser) {
    return reply({ message: 'user exists!' });
  }

  return reply();
};

// We need to create a userName for the user.
// This could be done in the handler, but
// why not let it be done in the route
// prereq instead
const createUserName = (request, reply) => {
  const name = request.payload.name;
  const userName = name.split(' ').join('-');
  reply(userName.toLowerCase());
};

// Route prerequisites support both sync and async
// operations. The reply interface in the handler
// won't be called until this request is fulfilled

const getGithubImage = (request, reply) => {
  const userName = request.params.userName;
  const githubUser = usersData.find(
    user => user.userName == userName
  ).github;
  console.log('githubub', githubUser);

  if (!githubUser) return reply();
  
  const options = {
    headers: { 'User-Agent': 'ev-users-api' },
    json: true
  };

  Wreck.get(
    `https://api.github.com/users/${githubUser}`,
    options,
    (error, response, payload) => {
       reply(payload.avatar_url);
    }
  );
};

module.exports = {
    verifyUniqueUser,
    createUserName,
    getGithubImage
}

