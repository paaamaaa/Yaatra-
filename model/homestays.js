var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var homestaysSchema = new Schema({
    name: String,
    price: Number,
    location: String,
    description: String,
    imagePath: String
},{
    collection: 'homestays'
});

var Homestays = mongoose.model('Homestays', homestaysSchema);

module.exports = Homestays;