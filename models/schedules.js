const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating a Schedule Schema and Model
const SchedulesSchema = new Schema({
    visibility:{
<<<<<<< HEAD
        type:String,
        default:'private'
=======
        type:String
>>>>>>> 50a740876c35805b6337fdbf7dc1a49b86ce6cf7
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