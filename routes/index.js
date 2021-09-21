const router = require('express').Router()
const userRouter = require('./userRouter')
const productRouter = require('./productsRouter')
const categoryRouter = require('./categoryRouter')
const errorHandler = require('../middleware/errorHandler')
const cartController = require('./cartRouter')
router.get('/', (req, res) => {
    res.status(200).json({
        status: 'server is running'
    })
})
router.use('/product', productRouter)
router.use('/', userRouter)
router.use('/category', categoryRouter)
router.use('/cart', cartController)
router.use(errorHandler)

module.exports = router