export class ProductModel{
    constructor(
        public productId : Number,
        public productName : String,
        public productCode : String,
        public productQuantity : String,
        public price : Number,
        public starRating : Number,
        public imageUrl : String) {}
}