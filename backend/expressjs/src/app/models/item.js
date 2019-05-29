'use strict';

module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item',{
        productId: {
            field: 'product_id',
            allowNull: false,
            type: DataTypes.INTEGER
        },
        orderId: {
            field: 'order_id',
            allowNull: false,
            type: DataTypes.INTEGER
        },
        quantity: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
    },{});

    Item.associate = function (models) {
        Item.belongsTo(models.Product, {as: 'product'})
        Item.belongsTo(models.Order, {as: 'order'})
    };

    return Item;
};