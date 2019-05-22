const bcrypt = require('bcrypt');

'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User',{
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true 
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        },
        user_type: {
            allowNull: false,
            type: DataTypes.ENUM,
            values: ['admin', 'client']
        },
        active: {
            allowNull: false,
            defaultValue: true,
            type: DataTypes.BOOLEAN
        },
    },{ underscored: true });

    User.associate = function (models) {
        User.hasMany(models.Order)
    };

    //Hooks / Callbacks
    User.beforeSave(async (user, options) => {
        const hash = await bcrypt.hash(user.password, 10);

        user.password = hash;
    });

    return User;
};