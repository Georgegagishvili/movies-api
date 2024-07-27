const express = require('express')
const router = express.Router()
const actorController = require('../controllers/actor.controller.js')

router.get('/', actorController.getActors)

module.exports = router