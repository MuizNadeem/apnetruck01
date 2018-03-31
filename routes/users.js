const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

//Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if (err) {
            if (err.errors.username != undefined) {
                res.json({
                    success: false,
                    msg: err.errors.username.message
                });
            } else if (err.errors.email != undefined) {
                res.json({
                    success: false,
                    msg: err.errors.email.message
                });
            }
        } else {
            res.json({
                success: true,
                msg: 'User registered'
            });
        }
    });
});



//Authenticate
router.post('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE');
});

//Profile
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

module.exports = router;