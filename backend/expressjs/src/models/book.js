'use strict';

module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book',{
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        price: DataTypes.FLOAT,
        active: DataTypes.BOOLEAN
    },{ underscored: true });

    Book.associate = function (models) {
        Book.hasMany(models.Item)
    };

    return Book;
};