const express = require('express')
const router = express.Router()
const productRoutes = require('../Controller/productController')

router.get('/products', productRoutes.getAllProducts)
router.get('/', productRoutes.createProduct)
router.put('/:id', productRoutes.updateProduct)
router.delete('/:id', productRoutes.deleteProduct)

module.exports = router