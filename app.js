const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = express();

const users = require('./routes/users');

//Port number
const port = 3000;


//     Middleware
//To serve requests coming outside 1 domain
app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.json());

//Routes
app.use('/users', users);

/*temporary Index route 
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});
*/
//Start Server and Listen on specific port
app.listen(port, () => {
    console.log('Server started on port ' + port);
});