const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


//User Schema

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            isAsync: true,
            validator: function(v, cb) {
                User.find({ email: v }, function(err, docs) {
                    cb(docs.length == 0);
                });
            },
            message: 'Email already used!'
        }
    },
    username: {
        type: String,
        required: true,
        validate: {
            isAsync: true,
            validator: function(v, cb) {
                User.find({ username: v }, function(err, docs) {
                    cb(docs.length == 0);
                });
            },
            message: 'Username already used!'
        }
    },
    password: {
        type: String,
        required: true

    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
    const query = { username: username }
    User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = function(candidatePassword, hashedPassword, callback) {
    bcrypt.compare(candidatePassword, hashedPassword, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    })
}