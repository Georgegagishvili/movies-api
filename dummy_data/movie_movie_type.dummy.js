const MovieMovieType = require('../models/movie_movie_type.model')
const Movie = require('../models/movie.model')

const insertMovieMovieTypes = async () => {
    const movies = await Movie.find()

    for (let movie of movies) {
        const movieMovieType = await MovieMovieType(
            {
                movieId: movie._id,
                movieTypeId: movie.type,
            }
        )

        await movieMovieType.save();
    }
}

module.exports = { insertMovieMovieTypes }