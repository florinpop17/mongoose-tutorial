//Use Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Exports
module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

//Defining credentials and Connecting to database
var address = "mongodb://localhost/mongoose-testing";

connectToMongoose();

function connectToMongoose() {
    mongoose.connect(address); 
}

function disconnectFromMongoose() {
    mongoose.disconnect();
}