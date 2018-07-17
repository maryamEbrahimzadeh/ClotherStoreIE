// import mongoose from 'mongoose';
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productModel = new Schema({
    id : { type: String  },//unique
    name: { type: String  },
    sizes :{ type: String  },
    color :{ type : Array},
    isAvailable :{type : Boolean},
    price : {type:Number},
    discount : {type:Number},
    description  : { type: String  },
    thumbnail : {type : String},
    images :{type:Array},
    brand : {type :String}
})
module.exports = mongoose.model('product', productModel)
// export default mongoose.model('product', productModel)