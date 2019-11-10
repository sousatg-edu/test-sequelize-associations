const {Model, DataTypes} = require('sequelize');
const sequelize = require('../sequelize');
const uuid = require('uuid');

class Order extends Model {}

Order.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: uuid(),
    },
    address: {
        type: DataTypes.STRING,
    },
    customerId: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    modelName: 'order',
    timestamps: false,
});

module.exports = Order;
