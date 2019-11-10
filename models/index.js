const Product = require ('./product');
const ProductOrder = require('./productorder');
const Order = require('./order');
const Customer = require('./customer');


Order.belongsTo(Customer);

Product.belongsToMany(Order, {
    through: 'ProductOrders',
    as: 'orders',
    foreignKey: 'productId',
    otherKey: 'orderId'
});

Order.belongsToMany(Product, {
    through: 'ProductOrders',
    as: 'products',
    foreignKey: 'orderId',
    otherKey: 'productId'
});

module.exports = {
    Customer,
    Order,
    Product,
    ProductOrder,
};
