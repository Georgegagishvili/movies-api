const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const movieRoute = require('./routes/movie.route');
const { insertActors } = require('./dummy_data/actors.dummy');
const { insertMovieTypes } = require('./dummy_data/movie_type.dummy');
const { insertCategories } = require('./dummy_data/categorries.dummy');
const { insertMovies } = require('./dummy_data/movie.dummy');
const app = express();

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
dotenv.config()

// Routes

app.use('/api/movies', movieRoute)

app.get('/', (_, res) => {
    res.send("Hello World")
})


mongoose.connect(process.env.MONGODB_HOST).then(() => {
    app.listen(3000, async () => {
        console.log("Server is running")
        // await insertCategories();
        // await insertActors();
        // await insertMovieTypes();
        // await insertMovies();
    })
})