const productModel = require('../models/ProductModel');
class ProductsController {
    getProduct = (req, res) => {
        res.render('product/index');
    }

    // *get
    getIndexProduct = (req, res) => {
        productModel.find({
            bin: false
        }, function (err, data) {
            res.json(data);
        });
    }
    // *function
    createProduct = (req, res) => {
        console.log(req.file);

        const product = new productModel(req.query);
        product.image = req.file.filename;
        product.save();

        res.json({
            data: product
        })
        
    }
}

module.exports = new ProductsController();