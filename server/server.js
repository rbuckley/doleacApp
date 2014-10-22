// modules =================================================
var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose       = require('mongoose');
var uriUtil        = require('mongodb-uri');

// configuration ===========================================
// set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// config files
var config = require('./config/environment');

// connect to our mongoDB database 
var mongooseUri = uriUtil.formatMongoose(config.mongo.uri);
mongoose.connect(mongooseUri, config.mongo.options); 

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// routes ==================================================
require('./routes')(app); // configure our routes

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(config.port);               
app.set('appPath', 'client');

// shoutout to the user                     
console.log('Magic happens on port ' + config.port);

// expose app           
exports = module.exports = app;  
