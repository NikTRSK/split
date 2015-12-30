// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var billSchema = new mongoose.Schema({
    user: String,
    curr_balance: Number,
    items: [
    	{
    		item: String,
    		cost: Number
    	}
    	]
});

// Return model
module.exports = restful.model('Bills', productSchema);