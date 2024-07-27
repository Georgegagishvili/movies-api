const Category = require('../models/category.model.js')

const getCategories = async (req, res) => {
    const {name} = req.query
    let query = {}
    if(name){
        query.name = { $regex: name, $options: 'i'}
    }

    const categories = await Category.find(query)
    .select('-__v')
    .exec()

    res.status(200).json({
        success:true,
        data: categories,
    })
}

module.exports = {
    getCategories,
}