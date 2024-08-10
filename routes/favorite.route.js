const express = require('express')
const router = express.Router()
const authenticateJWT = require('../middlewares/auth.middleware')
const favoritesController = require('../controllers/favorite.controller')

router.get('/', authenticateJWT, favoritesController.getFavorites)
router.post('/:movieId', authenticateJWT, favoritesController.addToFavorites)
router.delete('/:movieId', authenticateJWT, favoritesController.removeFromFavorites)

module.exports = router