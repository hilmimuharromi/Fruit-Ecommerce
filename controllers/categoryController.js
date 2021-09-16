const {Category} = require('../models')

const getCategory = async (req, res, next) => {
    try{
        const categories = await Category.findAll({
            
        })
        res.status(200).json({
            status: 'success',
            data: categories
        })
    } catch(err) {
        console.log(err)
        res.status(400).json({
            err
        })
    }
}

const createCategory = async (req, res, next) => {
    const {name, slug, image_url} = req.body
    console.log(req.body)
    try{
        const category = await Category.create({
            name, slug, image_url
        })
        res.status(201).json({
            status: 'success',
            data: category
        })
    } catch(err) {
        console.log(err)
        res.status(400).json({
            err
        })
    }
}


const deleteCategory = async (req, res, next) => {
    const {id} = req.params
    try{
        const result = await Category.destroy({
            where: {
                id
            }
        })
        res.status(200).json({
            status: 'success',
            data: result
        })
    } catch(err) {
        res.status(400).json({
            err
        })
    }
}

const updateCategory = async (req, res, next) => {
    const {id} = req.params
    const {name, slug, image_url} = req.body
    try{
        const result = await Category.update({
            id, name, slug, image_url
        }, {
            where: {
                id: id
            },
            returning: true,
            plain: true
        })
        res.status(200).json({
            status: 'success',
            data: result
        })
    } catch(err) {
        res.status(400).json({
            err
        })
    }
}

module.exports = {
    getCategory,
    createCategory,
    deleteCategory,
    updateCategory
}