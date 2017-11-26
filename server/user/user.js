var mongoose = require("mongoose");
var Schema = mongoose.Schema;
//var bcrypt = require('bcrypt');

// define attributes for users
var userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    user: { type: String, required: true },
    friends: { type: String}
  });

//check input and DB 
userSchema.statics.authenticate = function(email,password,callback) {
    User.findOne({email:email})
    .exec(function(error,user){
        if (!user){
            var error = new Error("User not found");
            return callback(error);
        }
        if (password === user.password) {
            return callback(null,user);
        } else {
            return callback;
        }
        //bcrypt.compare(password,user.password,function(error,result){
        //    if (result === true){
        //        console.log("Encryption");
        //        return callback(null,user);
        //    } else {
        //       return callback;
        //    }
        //});
    });
};

var User = mongoose.model('User', userSchema);
module.exports = User;
