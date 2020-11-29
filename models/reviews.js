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
    
    courseId: {
        type: String,
        required: true
    },

    hidden:{
        type:Boolean
    },

    createdBy:{type:String}
    
})

ReviewSchema.set('timestamps', true);

const Review = mongoose.model('reviews', ReviewSchema);

module.exports = Review;