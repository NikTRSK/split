// split API BASE SETUP
//=================================================================================

// Setup dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// init Express
var app = express();

// only for testing. Serves static content
var path = require('path');

// connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost/splitDB');

// configure app to use bodyParser()
// this will let us get the data from a POST
// this enables JSON magic
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes. This is the html content. For testing. NOT PART OF API
app.use('/', express.static('public'));
app.get('/', function(req, res){
  res.render('/public/index.html');
});

// JSON API
// Routes. Connects to the bill in api.js
app.use('/api', require('./routes/api'));
app.use('/api/user', require('./routes/users'));
// JSON API end

// Start server
var port = process.env.PORT || 3000;	// server runs on this port, 3000 for now
app.listen(port);
console.log('API is running on port ' + port);