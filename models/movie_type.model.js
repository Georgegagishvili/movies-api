const mongoose = require('mongoose')

const MovieTypeSchema = mongoose.Schema(
    {
        name: {
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