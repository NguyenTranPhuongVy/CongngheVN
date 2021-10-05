class ProductsController {
    getProduct = (req, res) => {
        res.render('product/index');
    }
}

module.exports = new ProductsController();