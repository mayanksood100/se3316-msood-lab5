const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

//Creating a Users Schema and Model
const UserSchema = new Schema({

    name:{
        type: String,
        required:true
    },
    username: {
        type: String,
        required:true
    },

    email: { type: String, required: true, max:30, unique:true},

    password:{
        type: String,
        required:true
    },

    active: {type: Boolean},
    deactive: {type: Boolean},
    authenticationCode: {type: String, max: 5, min: 5},
    admin: {type: Boolean},

});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema);

module.exports = User;