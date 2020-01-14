const mongoose = require('mongoose');
const MovieSchema = mongoose.Schema({
    movie_title: {
        type: String,
    },
    movie_rating: {
        type: Number,
    },
    release_date: {
        type: Date,
        default: Date.now,
    },
    genre: {
        type: String,
    },
    movie_duration: {
        type: String,
    },
});

module.exports = mongoose.model('movie', MovieSchema);