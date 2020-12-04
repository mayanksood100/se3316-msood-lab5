const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    title:{
        type: String,
        max: 50
    },
    comment:{
    type: String,
    max: 255
    },
    rating:{
        type: String,
    },
    
    courseId: {
        type: String,
        required: true
    },

    hidden:{
        type:Boolean
    },

    createdBy:{type:String},

    infringing:{
        type:Boolean,
        default:false
    }

})

ReviewSchema.set('timestamps', true);

const Review = mongoose.model('reviews', ReviewSchema);

module.exports = Review;