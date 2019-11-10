'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.UUID
      },
      address: {
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Orders');
  }
};