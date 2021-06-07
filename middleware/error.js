const winston = require("winston");

module.exports = function (err, req, res, next) {
  winston.err(err.message, err);
  res.status(500).send("somthing failed 111.");
  //   next();
};
