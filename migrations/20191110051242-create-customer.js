'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Customers', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Customers');
  }
};
