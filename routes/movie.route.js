const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movie.controller.js')


router.get('/', movieController.getMovies);

module.exports = router