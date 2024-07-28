const mongoose = require('mongoose')

const MovieTypeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        movies: [{
            type: mongoose.Types.ObjectId,
            ref: 'Movies',
            required: true,
            default: [],
        }]
    },
    {
        timestamps: true,
    }
)

const MovieType = mongoose.model('MovieType', MovieTypeSchema);

module.exports = MovieType