const router = require('express').Router()
const {getAllProducts, createProduct, deleteProduct, updateProduct, getProductById} = require('../controllers/productController')

router.get('/', getAllProducts)
router.get('/:id', getProductById)

router.post('/', createProduct)
router.delete('/:id', deleteProduct)
router.put('/:id', updateProduct)


module.exports = router
