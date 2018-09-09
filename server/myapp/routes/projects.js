var express = require('express');
var router = express.Router();

var Projects = require('../models/projects');

router.get('/', function(req, res, next) {
    res.send('register works fine');
});


router.post('/', function(req, res, next) {

    var updateProjectsModel = new Projects({
        email: req.body.email,
        title: req.body.title,
        story: req.body.story,
        category: req.body.category,
        newEmail: req.body.newEmail,
        status: req.body.status
    });

    Projects.addProject(updateProjectsModel, function(err, Projects, callback) {
        if(err) throw err;
        res.json(Projects);
    });

});

router.post('/update', function(req, res, next) {

    var updateProjectsModel = new Projects({
        email: req.body.email,
        newEmail: req.body.newEmail
    });

    Projects.updateProjects(updateProjectsModel, function(err, Projects, callback) {
        if(err) throw err;
        res.json(Projects);
    });

});

router.post('/getMyProjects', function(req, res, next) {
    var email = {email: req.body.email};

    Projects.getAllProjects(email, function(err, Projects, callback) {
        if(err) throw err;
        res.json(Projects);
    });

});

router.post('/deleteProject', function(req, res, next) {
    var id = {id: req.body.id};

    Projects.deleteCurrentProject(id, function(err, Projects, callback) {
        if(err) throw err;
        res.json(Projects);
    });

});




module.exports = router;