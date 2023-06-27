const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductsController')

router.get('/', ProductController.showProducts)
router.get('/create', ProductController.createProduct)
router.post('/create', ProductController.createProductPost)
router.get('/product/:id', ProductController.getProduct)
router.get('/edit/:id', ProductController.editProduct)
router.post('/edit', ProductController.editProductPost)
router.post('/remove/:id', ProductController.removeProduct)

module.exports=router