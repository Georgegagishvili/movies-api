const MovieActor = require('../models/movie_actor.model')
const Movie = require('../models/movie.model')

const insertMovieActors = async () => {
    const movies = await Movie.find()

    for (let movie of movies) {
        const actors = movie.actors

        for (let actor of actors) {
            const movieActor = MovieActor(
                {
                    movieId: movie._id,
                    actorId: actor,
                }
            )

            await movieActor.save()
        }
    }
}

module.exports = {
    insertMovieActors,
}