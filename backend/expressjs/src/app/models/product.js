'use strict';

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product',{
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        price: DataTypes.FLOAT,
        active: DataTypes.BOOLEAN,
        image: {
            allowNull: false,
            type: DataTypes.STRING
        }
    },{
        // getterMethods: {
        //     imageUrl: function () {
        //         return `${process.env.APP_HOST}:${process.env.APP_PORT}/images/book/${this.getDataValue('image')}`
        //     }
        // },
    });

    Product.associate = function (models) {
        Product.hasMany(models.Item, {as: 'items'})
    };

    return Product;
};