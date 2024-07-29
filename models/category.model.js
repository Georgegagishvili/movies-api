const mongoose = require('mongoose')

const CategorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'CATEGORY_NAME_IS_REQUIRED'],
        },
        image: {
            type: String,
            required: true,
            default: null,
        },
        // movies: [{
        //     type: mongoose.Types.ObjectId,
        //     required: true,
        //     ref: 'Movie',
        //     default: []
        // }]
    },
    {
        timestamps: true,

    },
)

const Category = mongoose.model('Category', CategorySchema)
module.exports = Category;