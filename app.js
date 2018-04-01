const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

//MongoDB
// Connect To Database
mongoose.Promise = require('bluebird');
mongoose.connect(config.database, { promiseLibrary: require('bluebird') })
    .then(() => console.log(`Connected to database ${config.database}`))
    .catch((err) => console.log(`Database error: ${err}`));



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

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

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