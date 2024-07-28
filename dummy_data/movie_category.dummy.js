const MovieCategory = require('../models/movie_category.model')
const Movie = require('../models/movie.model')

const insertMovieCategories = async () => {
    const movies = await Movie.find()

    for (let movie of movies) {
        const categories = movie.categories
        for (let category of categories) {
            const movieCategory = MovieCategory(
                {
                    movieId: movie._id,
                    categoryId: category
                }
            )

            await movieCategory.save()
        }
    }

}

module.exports = {
    insertMovieCategories,
}