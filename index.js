const {Sequelize, Model, DataTypes} = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/database.db'
});

const Model = Sequelize.Model;

class Product extends Model {}

Product.init({
    id: {
        type: DataTypes.UUID,
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
});

class Order extends Model {}

Order.init({
    id: {
        type: DataTypes.UUID,
    },
    address: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    modelName: 'order',
});

class ProductOrder extends Model {}

ProductOrder.init({
    id: {
        type: DataTypes.UUID,
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
});
