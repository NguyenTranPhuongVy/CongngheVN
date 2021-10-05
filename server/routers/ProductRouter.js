const express = require('express');
const productController = require('../app/controllers/ProductController');

const router = express.Router();

router.get('/product/',productController.getProduct);

module.exports = router;