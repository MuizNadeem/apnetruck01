const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//MongoDB
mongoose.connect(config.database);
//Good Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database)
});
//Connection error
mongoose.connection.on('error', (err) => {
    console.log('Database Error ' + err)
});


const app = express();

//Port number
const port = 3000;

const users = require('./routes/users');

//     Middleware
//To serve requests coming outside 1 domain
app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.json());

//Routes
app.use('/users', users);

/*temporary Index route */
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

//Start Server and Listen on specific port
app.listen(port, () => {
    console.log('Server started on port ' + port);
});