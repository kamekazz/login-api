// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
// const cors = require('cors');


mongoose.connect('mongodb://kamekazz:sdlkjfakjfO0818@ds157503.mlab.com:57503/react-auth', 
    { 
        useCreateIndex: true,
        useNewUrlParser: true 
    },()=>{
    console.log('mongoDB is runing.....');
});

// // App Setup
app.use(morgan('combined'));
// app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);



// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);



// sdlkjfakjfO0818