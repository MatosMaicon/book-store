'use strict';

module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book',{
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

    Book.associate = function (models) {
        Book.hasMany(models.Item)
    };

    return Book;
};