const router = require('express').Router()
const {getCategory, createCategory, deleteCategory, updateCategory} = require('../controllers/categoryController')
const authentication = require('../middleware/authentication')
router.get('/', getCategory)
router.post('/', createCategory, authentication)
router.put('/:id', updateCategory, authentication)
router.delete('/:id',authentication, deleteCategory )



module.exports = router