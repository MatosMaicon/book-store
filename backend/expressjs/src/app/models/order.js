'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER
    },
    status: {
      allowNull: false,
      type: DataTypes.ENUM,
      values: ['pending', 'paid', 'canceled'],
      defaultValue: 'pending',
    },
    total: {
      allowNull: false,
      type: DataTypes.DOUBLE
    },
    dateOrder: {
      field: 'date_order',
      allowNull: false,
      type: DataTypes.DATEONLY
    }
  }, {});

  Order.prototype.teste = async function () {
    //função de classe
  };

  Order.associate = function(models) {
    Order.belongsTo(models.User)
    Order.hasMany(models.Item)
    //Order.belongsToMany(models.Book, {through: 'Item', foreignKey: 'order_id'})
  };


  return Order;
};