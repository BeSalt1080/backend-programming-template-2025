const express = require('express');

const authenticationController = require('./authentication-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/authentication', route);

  route.post('/login', authenticationController.login);
};
