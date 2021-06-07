const express = require('express');
const error = require('../middleware/error');
const genres = require("../routes/genres");
const customer = require("../routes/customer");
const movies = require("../routes/movies");
const rentals = require("../routes/rental");
const users = require("../routes/user");
const auth = require("../routes/auth");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/genres", genres);
  app.use("/api/customer", customer);
  app.use("/api/movies", movies);
  app.use("/api/rentals", rentals);
  app.use("/api/users", users);
  app.use("/api/auth", auth);
  app.use(error); // for error handling
};
