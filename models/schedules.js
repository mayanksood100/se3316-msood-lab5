const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating a Schedule Schema and Model
const SchedulesSchema = new Schema({
    visibility:{
        type:String,
        default:'private'
    },

    scheduleName: {
        type: String,
        required:[true, 'Schedule Name is required!'],
        unique:true
    },

    scheduleDescription:{
        type:String,
        required:false
    },

    subject_schedule:{
        type: Array
    },
});

const Schedule = mongoose.model('schedule', SchedulesSchema);

module.exports = Schedule;