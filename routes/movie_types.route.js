const express = require('express')
const router = express.Router()
const movieTypesController = require('../controllers/movie_types.controller')

router.get('/', movieTypesController.getMovieTypes)

module.exports = router