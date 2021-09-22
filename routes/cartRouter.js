const router = require('express').Router()
const {getCart, saveCart, deleteCart} = require('../controllers/cartController')
const authentication = require('../middleware/authentication')


router.get('/',authentication, getCart)
router.post('/',authentication, saveCart)
router.delete('/:id', authentication, deleteCart)

module.exports = router
