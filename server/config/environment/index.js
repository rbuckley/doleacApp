'use strict'

var path = require('path');
var _ = require('lodash');

function requiredProcessEnv(name) {
   if(!process.env[name]) {
      throw new Error('You must set the ' + name + ' environment variable');
   }
   return process.env[name];
}

var all = {

   env: process.env.NODE_ENV,

   // Root path of server
   root: path.normalize(__dirname + '/../../..'),

   // set our port
   port:  process.env.PORT || 8080,

   //Mongo DB connection options
   mongo: {
      options: {
         server: { socketOptions: {keepAlive: 1, connectTimeoutMS: 30000 } },
         replset: { socketOptions: {keepAlive: 1, connectTimeoutMS: 30000 } },
         db: { safe: true }
      }
   }
}; 

console.log(process.env.NODE_ENV);
// Export the config object based on the NODE_ENV
// ==============================================
module.exports = _.merge(
   all,
   require('./' + process.env.NODE_ENV + '.js') || {});
