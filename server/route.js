import express from 'express';
import product from 'modals.js';
const shopRouter = express.Router();
shopRouter.route('/')
    .get((req, res) => {
        product.find({}, (err, books) => {
            res.json(books)
        })  
    })
    .post((req) => {
        let book = new Book(req.body);
        book.save();
        // res.status(201).send(book) 
    })


export default shopRouter;