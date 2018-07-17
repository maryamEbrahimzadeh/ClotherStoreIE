const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderModel = new Schema({
    id : { type: String  },
    totalprice: { type: Number  },
    orders : {type : Array } ,// its struncture is [ {id : productid ,quantity :number }]
    address :{ type : String},
    paymenttype : { type : String},//credit cash or online
    status :{ type : String},//submited paid sent delivered
    delinetytime  : {type : String},

})
module.exports = mongoose.model('order', orderModel)