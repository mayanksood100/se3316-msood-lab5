const mongoose = require('mongoose');

const LogsSchema = new mongoose.Schema({
   title:{type:String},
   type:{type:String}
});

LogsSchema.set('timestamps', true);
const Logs = mongoose.model('logs', LogsSchema);

module.exports = Logs;