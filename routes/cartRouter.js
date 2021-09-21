const router = require('express').Router()
const {getCart, saveCart} = require('../controllers/cartController')
const authentication = require('../middleware/authentication')


router.get('/',authentication, getCart)
router.post('/',authentication, saveCart)

module.exports = router
