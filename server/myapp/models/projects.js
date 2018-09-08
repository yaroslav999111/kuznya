const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectsSchema = new Schema({
    email: {
        type: String
    },
    title: {
        type: String
    },
    story: {
        type: String
    },
    category: {
        type: String
    },
    newEmail: {
        type: String
    }

} , {collection: 'projects'});

var Projects = module.exports = mongoose.model("Projects", projectsSchema);

module.exports.addProject = function(projects, callback) {

    var updateUserNewCheckedData = {};

    function checkForLength() {

        if (projects.newEmail) {
            updateUserNewCheckedData.email = projects.newEmail
        }
        if (projects.title) {
            updateUserNewCheckedData.title = projects.title
        }
        if (projects.story) {
            updateUserNewCheckedData.story = projects.story
        }
        if (projects.category) {
            updateUserNewCheckedData.category = projects.category
        }

        projects.save(callback);

    }

    checkForLength();

};


module.exports.updateProjects = function(projects, callback) {

    var updateUserNewCheckedData = {};

    function checkForLength() {

        if (projects.newEmail) {
            updateUserNewCheckedData.email = projects.newEmail
        }

    }

    checkForLength();


    Projects.update({"email": projects.email},{
        $set: updateUserNewCheckedData
    }, {multi:true, upsert:true}, function(err, Projects) {
        if(err) {
            console.log('1');
            return callback(err);
        } else {
            console.log(Projects);
            return callback(null, Projects)
        }
    })

};

