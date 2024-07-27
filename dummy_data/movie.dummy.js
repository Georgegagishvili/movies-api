const Actor = require("../models/actor.model");
const Category = require("../models/category.model");
const Movie = require("../models/movie.model");
const MovieType = require("../models/movie_type.model");

async function insertMovies() {
    const movieTypes = await MovieType.find().limit(5);
    const categories = await Category.find().limit(2);
    const actors = await Actor.find().limit(2);

    if (movieTypes.length === 0 || categories.length === 0 || actors.length === 0) {
        console.error('Not enough data in one or more collections.');
        mongoose.connection.close();
        return;
    }
    const movies = [
        {
            name: 'The Avengers',
            description: 'A group of superheroes unite to save the world.',
            type: movieTypes[3]._id,
            categories: [categories[0]._id, categories[1]._id],
            location: 'New York, USA',
            languages: ['English'],
            releaseDate: '2012-05-04',
            quality: ['HD', '4K'],
            duration: '143 min',
            rating: 8.0,
            actors: [actors[0]._id, actors[1]._id]
        },
        {
            name: 'Inception',
            description: 'A thief who enters the dreams of others to steal secrets from their subconscious.',
            type: movieTypes[0]._id,
            categories: [categories[1]._id],
            location: 'Los Angeles, USA',
            languages: ['English'],
            releaseDate: '2010-07-16',
            quality: ['HD'],
            duration: '148 min',
            rating: 8.8,
            actors: [actors[1]._id]
        }
    ];

    await Movie.deleteMany({});

    await Movie.insertMany(movies);
}

module.exports = {
    insertMovies,
}