const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config')

function tokenForUser(user) {
    console.log('tokenforuser');
    // get current time when token is generated
    var timestamp = new Date().getTime();
    
    // encode token that contains userid and issue time (iat)
    return jwt.encode({
        sub: user.id,
        iat: timestamp
    }, config.secret);
}

exports.signin = function (req, res, next) {
    var user = req.user
    console.log(user)
    res.json({token: tokenForUser(user), user_id: user._id});
}


exports.signup = function(req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    var name = req.body.name;

    if (!email || !password) {
        return res.status(422).json({error: 'You must provide an email and password'})
    }

    // Check if user already exists, send error if they do
    User.findOne({email: email}, function(err, existingUser) {
        if (err) { 
            return next(err) 
        }
        if (existingUser) {
            return res.status(422).json({error: 'Email taken'})
        }
        var user = new User({
            name: name,
            email: email,
            password: password
        });
        user.save(function (err) {
            if (err) {
                return next(err);
            }
            res.json({user_id: user._id, token: tokenForUser(user)})
        })
    });
}