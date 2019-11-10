'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Products', [{
        title: 'Product 1',
        description: 'Product 1 description',
        price: 100
      }, {
        title: 'Product 2',
        description: 'Product 2 description',
        price: 200
      }, {
        title: 'Product 3',
        description: 'Product 3 description',
        price: 300
      }, {
        title: 'Product 4',
        description: 'Product 4 description',
        price: 400
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
