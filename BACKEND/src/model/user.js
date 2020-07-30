const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ProductDb");

const Schema = mongoose.Schema;

var userSchema = new Schema({
    userName:String,
    email:String,
    password:String,
    number:Number,
});


module.exports = mongoose.model('user' , userSchema, 'users');