//Use Mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Defining credentials and Connecting to database
var address = "mongodb://localhost/mongoose-testing";

connectToMongoose();

function connectToMongoose() {
    mongoose.connect(address); 
}

function disconnectFromMongoose() {
    mongoose.disconnect();
}