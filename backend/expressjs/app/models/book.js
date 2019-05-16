'use strict';

module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define(
        'Book',
        {
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            price: DataTypes.FLOAT,
            active: DataTypes.BOOLEAN
        },
        {
            underscored: true
        }
    );

    Book.associate = function (models) {
        // associations can be defined here
    };

    return Book;
};