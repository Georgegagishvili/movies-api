const mongoose = require('mongoose')

const movieActorSchema = mongoose.Schema(
    {
        movieId:{
            type: mongoose.Types.ObjectId,
            ref: 'Movie',
            required: true,
        },
        actorId: {
            type: mongoose.Types.ObjectId,
            ref: 'Actor',
            required: true,
        }
    }
)

const MovieActor = mongoose.model('MovieActor', movieActorSchema)

module.exports = MovieActor