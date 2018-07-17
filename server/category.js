const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const categoryModel = new Schema({
    id : { type: String  },
    name: { type: String  },
    subcategory :{type:Array},
})
module.exports = mongoose.model('category', categoryModel)