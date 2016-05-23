// app/models/location.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var userLocation   = new Schema({
    location: String
});

module.exports = mongoose.model('userLoc', userLocation);