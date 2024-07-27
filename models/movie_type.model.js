const mongoose = require('mongoose')

const MovieTypeSchema = mongoose.Schema(
    {
        type: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

const MovieType = mongoose.model('MovieType', MovieTypeSchema);

module.exports = MovieType