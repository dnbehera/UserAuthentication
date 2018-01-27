

const express = require('express'); // inclue Node's http module
const mongoose = require('mongoose');

const server = express();

mongoose.connect('mongodb://localhost/test');
let dbConnections = mongoose.connection;

dbConnections.on('error', data => console.log(data));
dbConnections.once('open', () => console.log('connected to Mongo DB'));

let usrSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required: true,
        trim: true
    }
});

server.get('/', (req, res) => {
    res.send('Server Started ');
}).listen(3002);

