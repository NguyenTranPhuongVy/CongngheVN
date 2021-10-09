const express = require('express');
const productController = require('../app/controllers/ProductController');
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'client/public/images/product')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + '-' + file.originalname
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({
    storage: storage
});
const router = express.Router();

router.get('/product/', productController.getProduct);
//  *get
router.get('/product/index', productController.getIndexProduct);
//  *function
router.post('/product/create', upload.single('file'), productController.createProduct);

module.exports = router;