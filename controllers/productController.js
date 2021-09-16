const {Product} = require('../models')

const getAllProducts = async (req, res, next) => {
    console.log('masuk sini')
    try{
        const products = await Product.findAll({})
        res.status(200).json({
            status: 'success',
            data: products
        })
    } catch(err) {
        res.status(400).json({
            err
        })
    }
}

module.exports = {
    getAllProducts
}
