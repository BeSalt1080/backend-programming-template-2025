const express = require('express');

const books = require('./components/books/books-route');
const users = require('./components/users/users-route');
const authentication = require('./components/authentication/authentication-route');

module.exports = () => {
  const app = express.Router();

  books(app);
  users(app);
  authentication(app);

  return app;
};
