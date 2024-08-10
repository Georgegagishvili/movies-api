const express = require('express')
const mongoose = require('mongoose')
const app = express();
const dotenv = require('dotenv')
const movieRoute = require('./routes/movie.route');
const categoryRoute = require('./routes/category.route')
const actorRoute = require('./routes/actor.route')
const movieTypesRoute = require('./routes/movie_types.route')
const authRoute = require('./routes/auth.route')
const favoriteRoute = require('./routes/favorite.route')
const insertData = require('./dummy_data/dummy_helper');

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
dotenv.config()

// Routes
app.use('/api/movies', movieRoute)
app.use('/api/categories', categoryRoute)
app.use('/api/actors', actorRoute)
app.use('/api/movie-types', movieTypesRoute)
app.use('/api/auth', authRoute)
app.use('/api/favorites', favoriteRoute)

app.get('/', (_, res) => {
    res.send("Hello World")
})


mongoose.connect(process.env.MONGODB_HOST).then(() => {
    app.listen(3000, async () => {
        console.log("Server is running")
        // await insertData();
    })
})