const express = require('express');
const productController = require('../app/controllers/ProductController');

const router = express.Router();

router.get('/product/', productController.getProduct);
//  *get
router.get('/product/index', productController.getIndexProduct);
//  *function
router.get('/product/create', productController.createProduct);

module.exports = router;