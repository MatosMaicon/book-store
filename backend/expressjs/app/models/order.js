'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    status: {
      type: Sequelize.ENUM,
      values: ['pending', 'paid', 'canceled']
    },
    total: DataTypes.FLOAT
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};