const config = require("config");

module.exports = function () {
  if (!config.get("jwtPrivateKey")) {
    // console.error("FATAL ERROR : jwtPrivateKey is not defined.");
    // process.exit(1); //0 means success any thing else no
    throw new Error('FATAL ERROR : jwtPrivateKey is not defined.');
  }
};
