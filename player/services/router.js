const passport = require('passport')

const AuthController = require('../controllers/auth_controller')
const passportService = require('./passport')

var requireAuth = passport.authenticate('jwt', {session: false})
var router = require('express').Router()

function protected(req, res, next) {
    res.send('Here is the secret!')
}

router.route('/protected')
    .get(requireAuth, protected)

router.route('/signup')
    .post(AuthController.signup)

module.exports = router