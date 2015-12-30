// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Bill = require('../models/Bill');

// Routes
Bill.methods(['get', 'put', 'post', 'delete']);
Bill.register(router, '/Bills');

// Return router
module.exports = router;