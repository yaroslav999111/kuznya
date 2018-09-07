const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

// mongoose.connect('mongodb:localhost/allUsers2');
//
// var db = mongoose.connection;


const userSchema = new Schema({
    username: {
        type: String
    },
    sname: {
        type: String
    },
    email: {
      type: String
    },
    mobile: {
        type: String
    },
    password: {
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
                    bcrypt.compare(newUser.password, user.password, function (err, result) {
                        if (result === true) {
                            return callback(null, user);
                        } else {
                            return callback();
                        }
                    })
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