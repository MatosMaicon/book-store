'use strict';

module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item',{
        bookId: {
            field: 'book_id',
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
        Item.belongsTo(models.Book)
        Item.belongsTo(models.Order)
    };

    return Item;
};