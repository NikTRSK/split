// split API BASE SETUP
//=================================================================================

// load modules ===================================================================
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
// init Express
var app = express();

// only for testing. Serves static content
//var path = require('path');

// configure Mongo ================================================================
// config files
var db = require('./config/db');
// connect to MongoDB using Mongoose ==============================================
//mongoose.connect('mongodb://localhost/splitDB');
mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// configure Passport =============================================================
var passport = require('passport');
var expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKey'})); // why do we need the secret
app.use(passport.initialize());
app.use(passport.session());
/*// serialize user instance
passport.serializeUser(function(user, done) {
  done(null, user._id);
});
// deserialize user instance
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});*/
// Use flash middleware provided by connect-flash to store messages in session
// and displaying in templates
var flash = require('connect-flash');
app.use(flash());
//Initialize Passport
var initPassport = require('./passport/init');
initPassport(passport);

// configure api to use bodyParser() ==============================================
// this will let us get the data from a POST
// this enables JSON magic
// parse application as JSON
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Routes. This is the html content. For testing. NOT PART OF API ================
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
/*api.get('/', function(req, res){
 res.render('/public/views/index.html');
 });*/

// JSON API =====================================================================
// Routes. Connects to the bill in api.js =======================================
//api.use('/api', require('./api/routes/api'));
app.use('/api/user', require('./api/routes/users'));

// Login routes
app.use('/', require('./api/routes/index'));

// for ANGULAR use
app.get('*', function(req, res) {
  res.sendfile('./public/index.html');
});
// JSON API end =================================================================

// routes ==================================================
require('./api/routes')(app); // pass our application into our routes

// Start server =================================================================
var port = process.env.PORT || 3000;	// server runs on this port, 3000 for now
app.listen(port);
console.log('API is running on port ' + port);

// expose api. NOT SURE WHY
exports = module.exports = app;
