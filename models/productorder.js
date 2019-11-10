const {Model, DataTypes} = require('sequelize');
const sequelize = require('../sequelize');
const uuid = require('uuid');

class ProductOrder extends Model {}

ProductOrder.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: uuid(),
    },
    productId: {
        type: DataTypes.UUID,
    },
    orderId: {
        type: DataTypes.UUID,
    },
    quantity: {
        type: DataTypes.DECIMAL,
    },
}, {
    sequelize,
    modelName: 'productorder',
    timestamps: false,
});

module.exports = ProductOrder;
