const passport = require('passport')
const ExtractJwt = require('passport-jwt').ExtractJwt
const JwtStrategy = require('passport-jwt').Strategy

const User = require('../models/user')
const config = require('../config')

/* 
 *  grab the jwt token from an incoming request and authorization header, 
 *  it will decrypt it and if it's valid token, its gonna grab the user from the db 
 *  and add it to our request object for use.
 *  it it's invalid, passport will send back 401 error which is unauthorize error
 */

 var jwtOptions = {
     secretOrKey: config.secret,
     //grabs jwt token from request header
     jwtFromRequest: ExtractJwt.fromHeader('authorization')
 }

 // payload (unencrypted token)
 var jwtStrategy = new JwtStrategy (jwtOptions, function(payload, done) {
    User.findById(payload.sub, function(err, user) {
        if (err) {
            return done(err, false)
        }
        if (user) {
            done(null, user)
        } else {
            done(null, false)
        }
    })
 })

 passport.use(jwtStrategy);