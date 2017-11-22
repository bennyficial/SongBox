const passport = require('passport')

const AuthController = require('../controllers/auth_controller')
const passportService = require('./passport')

var requireAuth = passport.authenticate('jwt', {session: false})
var requireLogin = passport.authenticate('local', {session: false})
var router = require('express').Router()


// Auth Routes
// ----------------------------------------------------------------------------------
router.route('/signup')
    .post(AuthController.signup)

router.route('/signin')
    .post([requireLogin ,AuthController.signin])


// Protected Routes
// ----------------------------------------------------------------------------------
function protected(req, res, next) {
    res.send('Here is the secret!')
}

router.route('/protected')
    .get(requireAuth, protected)

module.exports = router