const mongoose = require('mongoose');

const PolicySchema = new mongoose.Schema({
    policyOne: String,
    policyTwo: String,
    policyThree: String
})

const Policy = mongoose.model('policies', PolicySchema);

module.exports = Policy;