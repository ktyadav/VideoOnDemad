const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

mongoose.connect('mongodb://ktyadav:kt%406233@ds159377.mlab.com:59377/complain-me');

var userHistory = new Schema({
    userid: number,
    videoid: number
})

var User = mongoose.model('User', userHistory);