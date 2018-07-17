const express = require("express");
// import express from 'express';
const mongoose = require("mongoose");
// import mongoose from 'mongoose';
const bodyParser = require("body-parser");
const shopRouter = require("./route.js");
// import bodyParser from 'body-parser';
// import shopRouter from 'route.js';

const db = mongoose.connect('mongodb://maryam:m123456@ds018238.mlab.com:18238/shop');

const app = express();
const port =  5656;



// routes go here
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/' , shopRouter);