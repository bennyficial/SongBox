const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const validator = require('validator');

var validateEmail = (email) => {
    return validator.isEmail(email);
}

var userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: 'Password is required'
    }
})

userSchema.pre('save', function(next) {
    var user = this;
    // checks if the user is new or password is being changed
    if (user.isNew || user.isModified('password')) {

        // add salt to password
        bcrypt.genSalt(10, function(err, salt) {
            if (err) {
                return next(err)
            }
            bcrypt.hash(user.password, salt, null, function(err, hash) {
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
})

userSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) {
            return callback(err)
        }
        console.log(isMatch)
        callback(null, isMatch)
    })
}

module.exports = mongoose.model('user', userSchema);