import express from 'express'; //es6
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
//const express = require('express'); // es5


let uri = "mongodb://saadhaxxan:1234@cluster0.fb5hl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to mongodb");

});

const app = express();

export default app;