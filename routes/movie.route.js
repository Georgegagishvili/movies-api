const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movie.controller.js')

router.get('/', movieController.getMovies);
router.get('/:id', movieController.getSingleMovie)

module.exports = router