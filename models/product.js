const {Model, DataTypes} = require('sequelize');
const sequelize = require('../sequelize');
const uuid = require('uuid');

class Product extends Model {}

Product.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: uuid(),
    },
    title: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT,
    },
    price: {
        type: DataTypes.DECIMAL
    },
}, {
    sequelize,
    modelName: 'product',
    timestamps: false,
});

module.exports = Product;
