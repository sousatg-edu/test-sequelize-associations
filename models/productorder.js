'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductOrder = sequelize.define('ProductOrder', {
    id: DataTypes.UUID,
    productId: DataTypes.UUID,
    orderId: DataTypes.UUID,
    quantity: DataTypes.DECIMAL
  }, {});
  ProductOrder.associate = function(models) {
    // associations can be defined here
  };
  return ProductOrder;
};