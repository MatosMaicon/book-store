const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
        userType: {
            field: 'user_type',
            allowNull: false,
            type: DataTypes.ENUM,
            defaultValue: 'client',
            values: ['admin', 'client']
        },
        active: {
            allowNull: false,
            defaultValue: true,
            type: DataTypes.BOOLEAN
        },
    },{});
    User.associate = function (models) {
        User.hasMany(models.Order)
    };

    User.prototype.generateToken = async function () {
        return jwt.sign({ id: this.id, role: this.userType }, process.env.APP_SECRET, {
            expiresIn: 86400,
        });
    };

    //METHODS CLASS
    User.params = async function (body){
        return {name, email, password, userType, active} = body
    }

    //Hooks / Callbacks
    User.beforeSave(async (user, options) => {
        const hash = await bcrypt.hash(user.password, 10);

        user.password = hash;
    });

    return User;
};