const mongoose = require('mongoose');

const DmcaSchema = new mongoose.Schema({
    policyOne: String,
    policyTwo: String,
    policyThree: String
})

const DMCA = mongoose.model('dmca', DmcaSchema);

module.exports = DMCA;