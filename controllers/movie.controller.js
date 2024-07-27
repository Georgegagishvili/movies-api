const Movie = require('../models/movie.model.js')

const getMovies = async (_, res) => {
    const movies = await Movie.find({});
    res.status(200).json({
        success: true,
        data: movies,
    })
}

module.exports = {
    getMovies,
}