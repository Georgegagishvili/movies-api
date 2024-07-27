const MovieType = require("../models/movie_type.model");

const movieTypes = [
    { name: 'Feature' },
    { name: 'Short' },
    { name: 'Documentary' },
    { name: 'Animation' },
    { name: 'TV Series' },
  ];


  const insertMovieTypes = async () => {
    await MovieType.deleteMany({});
    await MovieType.insertMany(movieTypes).then((docs) => {
        console.log("Dummy Actors Inserted", docs);
    })
}

module.exports = {
    insertMovieTypes,
}