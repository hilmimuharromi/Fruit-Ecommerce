const router = require('express').Router()
const {getAllProducts, createProduct, deleteProduct, updateProduct} = require('../controllers/productController')

router.get('/', getAllProducts)
router.post('/', createProduct)
router.delete('/:id', deleteProduct)
router.put('/:id', updateProduct)


module.exports = router
