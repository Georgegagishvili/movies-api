const { default: mongoose } = require('mongoose')
const Movie = require('../models/movie.model.js')

const getMovies = async (req, res) => {
    try {
        const { name } = req.query
        const { category } = req.query
        const { actor } = req.query
        const { type } = req.query
        let query = {}
        if (name) {
            query.name = { $regex: name, $options: 'i' };
        }

        if (category && mongoose.Types.ObjectId.isValid(category)) {
            query.categories = { $in: category }
        }

        if(actor && mongoose.Types.ObjectId.isValid(actor)){
            query.actors = { $in: actor }
        }

        if(type && mongoose.Types.ObjectId.isValid(type)){
            query.type = type
        }

        const movies = await Movie.find(query)
            .populate({
                path: 'type',
                select: '-__v -createdAt -updatedAt',
            })
            .exec()

        res.status(200).json({
            success: true,
            data: movies,
        })
    } catch (err) {
        ///ToDo replace
        res.status(500).json({
            success: false,
            error: err
        })
    }
}


const getSingleMovie = async (req, res) => {
    const { id } = req.params
    const movie = await Movie.findById(id)
        .populate({
            path: 'actors',
            select: '-createdAt -updatedAt -__v',
        })
        .populate({
            path: 'type',
            select: '-createdAt -updatedAt -__v'
        })
        .populate({
            path: 'categories',
            select: '-createdAt -updatedAt -__v'
        })
        .exec();

    if (!movie) {
        return res.status(404).json({
            success: false,
            err: 'MOVIE_NOT_FOUND'
        })
    }

    const movieResult = {
        ...movie.toObject(),
        type: movie.type ? movie.type.name : null,
    }

    res.status(200).json({
        success: true,
        data: movieResult,
    })
}

module.exports = {
    getMovies,
    getSingleMovie,
}