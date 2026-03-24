//function o update stock quantity after  a sale and send a 400 error if the stock quantity is insufficient
const Product = require('../models/Product');

const updateStockQuantity = async (productId, quantity) => {
    try {
        const product = await Product.findById(productId);
        if (!product) {
            throw new Error('Product not found');
        }
        if (product.stockQuantity < quantity) {
            throw new Error('Insufficient stock quantity');
        }
        product.stockQuantity -= quantity;
        await product.save();
        return product;
    } catch (error) {       
         throw error;
    }};

module.exports = {
    updateStockQuantity
};