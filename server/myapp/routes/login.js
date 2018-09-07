var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
var bcrypt = require('bcryptjs');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('register works fine');
});

router.post('/', function(req, res, next) {
    var newUser = new User({
        password: req.body.password,
        email: req.body.email
    });
    User.getUserByEmail(newUser, function(err, user, next) {
        if(err) res.send(err);
        else {
            res.json(user);
        }
    });

});

module.exports = router;