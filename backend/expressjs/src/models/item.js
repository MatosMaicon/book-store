'use strict';

module.exports = (sequelize, DataTypes) => {
    const Item = sequelize.define('Item',{
        book_id: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        order_id: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        quantity: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
    },{ underscored: true });

    Item.associate = function (models) {
        Item.belongsTo(models.Book)
        Item.belongsTo(models.Order)
    };

    return Item;
};