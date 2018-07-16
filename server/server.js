import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import shopRouter from 'route.js';
import express from 'express';
const app = express();
const port = process.env.PORT || 5656;
const db = mongoose.connect('mongodb://<maryam.eb>:<m123456>@ds125068.mlab.com:25068/api-test2');


// routes go here
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/' , shopRouter);