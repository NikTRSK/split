// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Bill = require('../models/Bill');

// Routes
Bill.methods(['get', 'put', 'post', 'delete']);
Bill.register(router, '/Bills');

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// Return router
module.exports = router;