const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ProductDb");
const Schema = mongoose.Schema;

var NewProductSchema = new Schema({
    productId : Number,
    productName : String,
    productCode : String,
    productQuantity : String,
    price : Number,
    starRating : Number,
    imageUrl : String
});

var Productdata = mongoose.model('product' , NewProductSchema ); 

module.exports = Productdata;