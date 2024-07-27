const Actor = require('../models/actor.model.js')

const getActors = async (_, res) => {
    const actors = await Actor.find()
    .select('-__v')
    .exec()

    res.status(200).json({
        success: true,
        data: actors
    })
}

module.exports = {
    getActors,
}