import express from 'express'; //es6
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes.js';
//const express = require('express'); // es5
import blogController from './controllers/BlogController.js';


let uri = "mongodb://saadhaxxan:1234@cluster0.fb5hl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to mongodb");

});

const app = express();
app.use(bodyParser.json());
app.use('/api', routes);

export default app;