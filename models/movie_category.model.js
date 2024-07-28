const mongoose = require('mongoose')

const movieCategorySchema = new mongoose.Schema(
    {
        movieId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Movie'
        },
        categoryId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category',
        }
    }
)

const MovieCategory = mongoose.model('MovieCategory', movieCategorySchema)

module.exports = MovieCategory