const { assert } = require('chai');
const { Product } = require('../index');

describe('Test modules methods', () => {
    it('Should return a list of products', async () => {
        const products = await Product.findAll();
    
        return assert.isTrue(products.length > 0);
    });    
});
