const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
//Creating a Users Schema and Model
const UserSchema = new Schema({
    name:{type:String},
    username: {
        type: String,
        required:[true, 'Username Name is required!'],
        unique:true
    },

    password:{
        type: String,
        required:[true, 'Password is required!'],
    },

    Active: {type: Boolean},
    Deactive: {type: Boolean},
    authenticationCode: {type: String, max: 5, min: 5},
    Admin: {type: Boolean},
});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema);

module.exports = User;