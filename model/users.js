var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: String,
    password: String
},{
    collection: 'users'
});

var User = mongoose.model('User',userSchema);

User.find(function(err,data){
    console.log('data',data);
});


module.exports = User;