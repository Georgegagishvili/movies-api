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
        },
        // Add 20 more movies
        {
            name: 'Interstellar',
            description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
            type: movieTypes[1]._id,
            categories: [categories[0]._id],
            location: 'Earth, Various',
            languages: ['English'],
            releaseDate: '2014-11-07',
            quality: ['HD', '4K'],
            duration: '169 min',
            rating: 8.6,
            actors: [actors[0]._id]
        },
        {
            name: 'The Dark Knight',
            description: 'Batman raises the stakes in his war on crime with the help of a new ally, Gotham City District Attorney Harvey Dent.',
            type: movieTypes[2]._id,
            categories: [categories[1]._id],
            location: 'Gotham City',
            languages: ['English'],
            releaseDate: '2008-07-18',
            quality: ['HD', '4K'],
            duration: '152 min',
            rating: 9.0,
            actors: [actors[1]._id]
        },
        {
            name: 'The Matrix',
            description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
            type: movieTypes[0]._id,
            categories: [categories[0]._id],
            location: 'Cyberworld',
            languages: ['English'],
            releaseDate: '1999-03-31',
            quality: ['HD'],
            duration: '136 min',
            rating: 8.7,
            actors: [actors[0]._id]
        },
        {
            name: 'Avatar',
            description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
            type: movieTypes[1]._id,
            categories: [categories[1]._id],
            location: 'Pandora',
            languages: ['English'],
            releaseDate: '2009-12-18',
            quality: ['HD', '4K'],
            duration: '162 min',
            rating: 7.8,
            actors: [actors[1]._id]
        },
        {
            name: 'Gladiator',
            description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
            type: movieTypes[2]._id,
            categories: [categories[0]._id],
            location: 'Rome',
            languages: ['English'],
            releaseDate: '2000-05-05',
            quality: ['HD'],
            duration: '155 min',
            rating: 8.5,
            actors: [actors[0]._id]
        },
        {
            name: 'The Shawshank Redemption',
            description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
            type: movieTypes[3]._id,
            categories: [categories[1]._id],
            location: 'Shawshank State Penitentiary',
            languages: ['English'],
            releaseDate: '1994-09-23',
            quality: ['HD'],
            duration: '142 min',
            rating: 9.3,
            actors: [actors[1]._id]
        },
        {
            name: 'Forrest Gump',
            description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.',
            type: movieTypes[4]._id,
            categories: [categories[0]._id],
            location: 'Various Locations',
            languages: ['English'],
            releaseDate: '1994-07-06',
            quality: ['HD'],
            duration: '142 min',
            rating: 8.8,
            actors: [actors[0]._id]
        },
        {
            name: 'Jurassic Park',
            description: 'During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.',
            type: movieTypes[1]._id,
            categories: [categories[1]._id],
            location: 'Isla Nublar',
            languages: ['English'],
            releaseDate: '1993-06-11',
            quality: ['HD'],
            duration: '127 min',
            rating: 8.1,
            actors: [actors[1]._id]
        },
        {
            name: 'The Lion King',
            description: 'Lion cub and future king Simba searches for his identity. His eagerness to please others and penchant for testing his boundaries sometimes gets him into trouble.',
            type: movieTypes[2]._id,
            categories: [categories[0]._id],
            location: 'Pride Rock',
            languages: ['English'],
            releaseDate: '1994-06-15',
            quality: ['HD'],
            duration: '88 min',
            rating: 8.5,
            actors: [actors[0]._id]
        },
        {
            name: 'The Godfather',
            description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
            type: movieTypes[3]._id,
            categories: [categories[1]._id],
            location: 'New York City',
            languages: ['English'],
            releaseDate: '1972-03-24',
            quality: ['HD'],
            duration: '175 min',
            rating: 9.2,
            actors: [actors[1]._id]
        },
        {
            name: 'Pulp Fiction',
            description: 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
            type: movieTypes[4]._id,
            categories: [categories[0]._id],
            location: 'Los Angeles',
            languages: ['English'],
            releaseDate: '1994-10-14',
            quality: ['HD'],
            duration: '154 min',
            rating: 8.9,
            actors: [actors[0]._id]
        },
        {
            name: 'Fight Club',
            description: 'An insomniac office worker and a soap salesman build a global organization to help vent male aggression.',
            type: movieTypes[0]._id,
            categories: [categories[1]._id],
            location: 'Various Locations',
            languages: ['English'],
            releaseDate: '1999-10-15',
            quality: ['HD'],
            duration: '139 min',
            rating: 8.8,
            actors: [actors[1]._id]
        },
        {
            name: 'The Departed',
            description: 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in Boston.',
            type: movieTypes[1]._id,
            categories: [categories[0]._id],
            location: 'Boston, USA',
            languages: ['English'],
            releaseDate: '2006-10-06',
            quality: ['HD'],
            duration: '151 min',
            rating: 8.5,
            actors: [actors[0]._id]
        },
        {
            name: 'The Prestige',
            description: 'Two stage magicians engage in competitive one-upmanship in an attempt to create the ultimate stage illusion.',
            type: movieTypes[2]._id,
            categories: [categories[1]._id],
            location: 'Various Locations',
            languages: ['English'],
            releaseDate: '2006-10-20',
            quality: ['HD'],
            duration: '130 min',
            rating: 8.5,
            actors: [actors[1]._id]
        },
    ];

    await Movie.deleteMany({});

    await Movie.insertMany(movies);
}

module.exports = {
    insertMovies,
}