const router = require('express').Router()
const userRouter = require('./userRouter')
const productRouter = require('./productsRouter')

router.get('/', (req, res) => {
    res.status(200).json({
        status: 'server is running'
    })
})
router.use('/product', productRouter)
router.use('/', userRouter)

module.exports = router