const router = require('express').Router()
const {register} = require('../controllers/userController')
const productRouter = require('./productsRouter')
router.use('/products', productRouter)
router.post('/register', register)

module.exports = router