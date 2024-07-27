const Actor = require('../models/actor.model.js')

const getActors = async (req, res) => {

    const { name } = req.query

    let query = {}
    if (name) {
        query.fullName = { $regex: name, $options: 'i' }
    }

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