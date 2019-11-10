const {Sequelize, Model, DataTypes} = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/development-database.db'
});

module.exports = sequelize;
