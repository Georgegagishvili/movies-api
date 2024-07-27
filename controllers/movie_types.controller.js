const MovieType = require('../models/movie_type.model')

const getMovieTypes = async (_, res) => {
    const movieTypes = await MovieType.find()
    .select('-__v')
    .exec()

    res.status(200).json({
        success:true,
        data: movieTypes,
    })
}

module.exports = {
    getMovieTypes,
}