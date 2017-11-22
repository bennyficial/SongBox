const AuthController = require('../controllers/auth_controller');
var router = require('express').Router();

function protected(req, res, next) {
    res.send('Here is the secret!');
}

router.route('/protected')
    .get(protected);

router.route('/signup')
    .post(AuthController.signup);

module.exports = router