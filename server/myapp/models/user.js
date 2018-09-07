const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

// mongoose.connect('mongodb:localhost/allUsers2');
//
// var db = mongoose.connection;


const userSchema = new Schema({
    username: {
        type: String,
        min: 1
    },
    sname: {
        type: String
    },
    email: {
      type: String,
        min: 1
    },
    mobile: {
        type: String
    },
    password: {
        type: String
    },
    site: {
        type: String
    },
    position: {
        type: String
    },
    about: {
        type: String
    },
    freeOrBusy: {
        type: String
    },
    newEmail: {
        type: String
    }

} , {collection: 'newUsers'});

var User = module.exports = mongoose.model("User", userSchema);

module.exports.createUser = function(newUser, callback) {
    // bcrypt.genSalt(10, function(err, salt) {
    //     bcrypt.hash(newUser.password, salt, function(err, hash) {
    //         // Store hash in your password DB.
    //         newUser.password = hash;
    //         newUser.save(callback)
    //     });
    // });
    newUser.save(callback);
};

module.exports.addProject = function(newUser, callback) {

    newUser.save(callback);
};

module.exports.updateUser = function(updateUser, callback) {
    var updateUserNewCheckedData = {};

    function checkForLength() {
        if(updateUser.username.length) {
            updateUserNewCheckedData.username = updateUser.username
        }
        if(updateUser.sname) {
            updateUserNewCheckedData.sname = updateUser.sname
        }
        if (updateUser.mobile) {
            updateUserNewCheckedData.mobile = updateUser.mobile
        }
        if (updateUser.password) {
            updateUserNewCheckedData.password = updateUser.password
        }
        if (updateUser.newEmail) {
            updateUserNewCheckedData.email = updateUser.newEmail
        }
        if (updateUser.site) {
            updateUserNewCheckedData.site = updateUser.site
        }
        if (updateUser.position) {
            updateUserNewCheckedData.position = updateUser.position
        }
        if (updateUser.about) {
            updateUserNewCheckedData.about = updateUser.about
        }
        if (updateUser.freeOrBusy) {
            updateUserNewCheckedData.freeOrBusy = updateUser.freeOrBusy
        }
        if (updateUser.photoAva) {
            updateUserNewCheckedData.photoAva = updateUser.photoAva
        }

    }
    checkForLength();

   User.findOneAndUpdate({email: updateUser.email}, {

       $set: updateUserNewCheckedData

       }, {new: true}, function(err, user, doc){
       if(err) {
           return callback(err);
       } else {
           return callback(null, user);
       }
    })

};


module.exports.getUserByUsername = function(username, callback) {
    var query = {username: username};
    User.findOne(query, callback);
};

module.exports.getUserByEmail = userSchema.statics.authenticate = function(newUser, callback) {

        User.findOne({ email: newUser.email })
            .exec(function (err, user) {
                if (err) {
                    return callback(err)
                }
                else if (!user) {
                    var err = new Error('User not found.');
                    err.status = 401;
                    return callback(err);
                } else {
                    if (user.password === newUser.password ) {
                        return callback(null, user);
                    } else {
                        var err = new Error('Incorrect password.');
                        err.status = 401;
                        return callback(err);
                    }


                    // bcrypt.compare(newUser.password, user.password, function (err, result) {
                    //     if (result === true) {
                    //         console.log('nice');
                    //         return callback(null, user);
                    //     } else {
                    //         console.log('error');
                    //         return callback();
                    //     }
                    // })
                }
            });


};

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
};

module.exports.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    })

};