const mongoose = require('mongoose')

const movieMovieTypeSchema = mongoose.Schema(
    {
        movieId: {
            type: mongoose.Types.ObjectId,
            ref: 'Movie',
            required: true,
        }
    },
    {
        movieTypeId: {
            type: mongoose.Types.ObjectId,
            ref: 'MovieType',
            required: true,
        }
    }
)

const MovieMovieType = mongoose.model('MovieMovieType', movieMovieTypeSchema)

module.exports = MovieMovieType