const Favorite = require('../models/favorite.model')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { ID_IS_NOT_VALID, FAVORITE_EXISTS } = require('../utils/user.errors')

const getFavorites = async (req, res) => {
    try {
        const token = req.headers.authorization.replace("Bearer ", "")
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const userId = decoded.userId

        console.log(userId)

        const favorites = await Favorite.find({
            userId: userId
        })
            .populate({
                path: 'movieId'
            })

        const formattedFavs = favorites.map(fav => ({
            _id: fav._id,
            userId: fav.userId,
            movie: fav.movieId
        }))

        res.status(200).json({
            success: true,
            data: formattedFavs
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}

const addToFavorites = async (req, res) => {
    try {
        const token = req.headers.authorization.replace("Bearer ", "")
        const { movieId } = req.params
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const userId = decoded.userId

        if (!movieId || !mongoose.Types.ObjectId.isValid(movieId)) {
            return res.status(400).json({
                success: false,
                message: ID_IS_NOT_VALID
            })
        }

        const existingFavorite = await Favorite.findOne({
            userId: userId,
            movieId: movieId,
        });

        if (existingFavorite) {
            return res.status(400).json({
                success: false,
                message: FAVORITE_EXISTS
            })
        }

        const newFavorite = Favorite({
            userId: userId,
            movieId: movieId,
        })
        await newFavorite.save()

        res.status(200).json({
            success: true,
            data: newFavorite
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}

const removeFromFavorites = async (req, res) => {
    try {
        const token = req.headers.authorization.replace("Bearer ", "")
        const { movieId } = req.params
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const userId = decoded.userId

        const deletedFav = await Favorite.findOneAndDelete({ userId, movieId })

        if (!deletedFav) {
            return res.status(404).json({
                success: false,
                message: "FAVORITE_NOT_FOUND"
            })
        }

        return res.status(200).json({
            success: true,
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: err.message,
        })
    }
}

module.exports = {
    getFavorites,
    addToFavorites,
    removeFromFavorites
}