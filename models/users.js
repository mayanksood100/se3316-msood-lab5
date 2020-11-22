const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
//Creating a Users Schema and Model
const UserSchema = new Schema({
    username: {
        type: String,
        required:[true, 'Username Name is required!'],
        unique:true
    },

   password:{
        type: String
    },
});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema);

module.exports = User;