const MovieType = require("../models/movie_type.model");

const movieTypes = [
    { type: 'Feature' },
    { type: 'Short' },
    { type: 'Documentary' },
    { type: 'Animation' },
    { type: 'TV Series' },
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