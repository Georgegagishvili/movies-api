const { default: mongoose } = require('mongoose')
const Movie = require('../models/movie.model.js')

const getMovies = async (req, res) => {
    try {
        const { name, category, actor, type} = req.query
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit

        let query = {}
        if (name) {
            query.name = { $regex: name, $options: 'i' };
        }

        if (category && mongoose.Types.ObjectId.isValid(category)) {
            query.categories = { $in: category }
        }

        if (actor && mongoose.Types.ObjectId.isValid(actor)) {
            query.actors = { $in: actor }
        }

        if (type && mongoose.Types.ObjectId.isValid(type)) {
            query.type = type
        }

        const totalMovies = await Movie.countDocuments()
        const movies = await Movie.find(query)
            .skip(offset)
            .limit(limit)
            .populate({
                path: 'type',
                select: '-__v -createdAt -updatedAt',
            })
            .exec()
            

        res.status(200).json({
            success: true,
            paging:{
                limit: limit,
                page: page,
                total: totalMovies,
                totalPages: Math.ceil(totalMovies / limit)
            },
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