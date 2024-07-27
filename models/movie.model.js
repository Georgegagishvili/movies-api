const mongoose = require('mongoose')
const Actor = require('./actor.model.js')
const Category = require('./category.model.js')
const MovieType = require('./movie_type.model.js')

const MovieSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
            default: null,
        },
        thumbnail: {
            type: String,
            required: true,
            default: null,
        },
        type:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'MovieType',
            required: true,
            default: null,
        },
        categories:{
            type: [{
                type: mongoose.Types.ObjectId, ref: 'Category'
            }],
            required: true,
            default: [],
        },
        location: {
            type: String,
            required: true,
            default: null,
        },
        languages: {
            type: [String],
            required: true,
            default: null,
        },
        releaseDate: {
            type: String,
            required: true,
            default: null,
        },
        quality: {
            type: [String],
            required: true,
            default: [],
        },
        duration: {
            type: String,
            required: true,
            default: null,
        },
        rating: {
            type: Number,
            required: true,
        },
        actors: {
            type: [{
                type: mongoose.Types.ObjectId,
                ref: 'Actor',
            }],
            required: true,
            default: []
        }
    },
    {
        timestamps: true,
    }
)

const Movie = mongoose.model("Movie", MovieSchema)
module.exports = Movie