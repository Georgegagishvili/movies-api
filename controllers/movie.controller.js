const Movie = require('../models/movie.model.js')

const getMovies = async (req, res) => {
    try {
        const { name } = req.query
        let query = {}
        if (name) {
            query.name = { $regex: name, $options: 'i' };
        }
        const movies = await Movie.find(query)

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

module.exports = {
    getMovies,
}