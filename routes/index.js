const router = require('express').Router()
const {register} = require('../controllers/userController')
const productRouter = require('./productsRouter')
router.get('/', (req, res) => {
    res.status(200).json({
        status: 'server is running'
    })
})
router.use('/products', productRouter)
router.post('/register', register)

module.exports = router