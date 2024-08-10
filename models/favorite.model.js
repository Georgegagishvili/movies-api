const mongoose = require('mongoose')

const FavoriteSchema = mongoose.Schema(
    {
        movieId: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Movie',
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User',
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

const Favorite = mongoose.model('Favorite', FavoriteSchema)
module.exports = Favorite;