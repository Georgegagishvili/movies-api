const { insertActors } = require("./actors.dummy");
const { insertCategories } = require("./categorries.dummy");
const { insertMovieTypes } = require("./movie_type.dummy");
const { insertMovies } = require("./movie.dummy");
const { insertMovieActors } = require("./movie_actor.dummy")
const { insertMovieCategories } = require("./movie_category.dummy");
const { insertMovieMovieTypes } = require("./movie_movie_type.dummy");

const insertData = async () => {
    await insertCategories();
    await insertActors();
    await insertMovieTypes();
    await insertMovies();
    await insertMovieCategories();
    await insertMovieMovieTypes();
    await insertMovieActors();
}

module.exports = insertData