var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('register works fine');
});

router.post('/', function(req, res, next) {
        var username = req.body.username;
        var sname = req.body.sname;
        var mobile = req.body.mobile;
        var password = req.body.password;

        // var errors = req.validationErrors();


    // if(errors) {
    //     console.log('one field is empty')
    // } else {
        var newUser = new User({
            username: username,
            sname: sname,
            mobile: mobile,
            password: password
        });
        User.createUser(newUser, function(err, user) {
            if(err) throw err;
            res.json({user: req.body.username});
        });

        // req.flash('success_msg', 'You are register and now login');
    // }
});

module.exports = router;