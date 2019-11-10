const {Model, DataTypes} = require('sequelize');
const sequelize = require('../sequelize');
const uuid = require('uuid');

class Customer extends Model {}

Customer.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: uuid(),
    },
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    modelName: 'customer',
    timestamps: false,
});

module.exports = Customer;