'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProductOrders', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        primaryKey: true
      },
      productId: {
        type: Sequelize.UUID
      },
      orderId: {
        type: Sequelize.UUID
      },
      quantity: {
        type: Sequelize.DECIMAL
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ProductOrders');
  }
};