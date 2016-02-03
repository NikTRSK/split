// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var userSchema = new mongoose.Schema({
    firstname: {
    	type: String,
    	validate : [validatePresenceOf, 'Firstname is required']
    },
    lastname: {
    	type: String,
    	validate : [validatePresenceOf, 'Lastname is required']
    },
    username: {
    	type: String,
    	unique: true,
    	trim: true,
    	validate : [validatePresenceOf, 'Username is required']
    },// create a method to create a username
    //password: { type: String, required: true },
    email: {
    	type: String,
    	validate : [validatePresenceOf, 'email is required']
    }
    phone: Number,
    created: {
    	type: Date,
    	default: Date.now
  	},
    bills: [{
    	bill: //key to bill
    }]
});

// Return model
module.exports = restful.model('Users', billSchema);