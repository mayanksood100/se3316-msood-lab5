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
        type: Number,
        max: 6
    },  
    subject: {
        type: String,
        required: true
    },

    courseNumber:{
        type: String,
        required: true
    },

    hidden:{
        type:Boolean
    }
    
})

const Review = mongoose.model('reviews', ReviewSchema);

module.exports = Review;