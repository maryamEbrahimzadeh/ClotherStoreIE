import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const productModel = new Schema({
    title: { type: String   },
    author: { type: String }
})
export default mongoose.model('product', productModel)