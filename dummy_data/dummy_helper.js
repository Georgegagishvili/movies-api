const { insertActors } = require("./actors.dummy");
const { insertCategories } = require("./categorries.dummy");
const { insertMovieTypes } = require("./movie_type.dummy");
const { insertMovies } = require("./movie.dummy");

const insertData = async () => {
    await insertCategories();
    await insertActors();
    await insertMovieTypes();
    await insertMovies();
}

module.exports = insertData