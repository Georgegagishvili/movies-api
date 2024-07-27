const Movie = require('../models/movie.model.js')

const getMovies = async (req, res) => {
    try {
        const { name } = req.query
        let query = {}
        if (name) {
            query.name = { $regex: name, $options: 'i' };
        }
        const movies = await Movie.find(query)
            .populate('type')
            .exec()

        const result = movies.map(movie => ({
            ...movie.toObject(),
            type: movie.type ? movie.type.name : null,
        }))

        res.status(200).json({
            success: true,
            data: result,
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
        .populate('type')
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