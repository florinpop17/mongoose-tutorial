var db = require('../lib/db');

//Create Schema
var UserSchema = new db.Schema({
    email: { type: String, unique: true},
    username: { type: String, unique: true},
    password: String
});

//Assign User Object
var MyUser = db.mongoose.model('User', UserSchema);

//Exports
module.exports = MyUser;