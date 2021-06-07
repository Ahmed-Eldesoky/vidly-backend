const winston= require('winston');
require('express-async-errors');

module.exports = function () {
  process.on("uncaughtException", (ex) => {
    //console.log('WE GOT AN UNCAUGHT EXCEPTION.');
    // winston.error(ex.message,ex);
    // process.exit(1);
    throw ex;
  });

  process.on("unhandledRejection", (ex) => {
    //console.log('WE GOT AN UNCAUGHT REJECTION.');
    // winston.error(ex.message,ex);
    // process.exit(1);
    throw ex;
  });

  //winston.add(winston.transports.File,{filename:'logfile.log'});// there is another one to mongoDB
  winston.add(new winston.transports.File({ filename: "logfile.log" }));
};
