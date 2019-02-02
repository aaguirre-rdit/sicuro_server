'use strict';
const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            field: 'email',
            type: DataTypes.STRING,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        facebookId: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        token:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        gender: {
            type: DataTypes.ENUM('male','female'),
        },
        allergy_gluten: {
            type: DataTypes.TINYINT(1)
        },
        allergy_eggs: {
            type: DataTypes.TINYINT(1)
        },
        allergy_nuts: {
            type: DataTypes.TINYINT(1)
        },
        allergy_soy: {
            type: DataTypes.TINYINT(1)
        },
        allergy_dairy: {
            type: DataTypes.TINYINT(1)
        },
        allergy_shellfish: {
            type: DataTypes.TINYINT(1)
        },
        allergy_other: {
            type: DataTypes.STRING,
        },
        country: {
            type: DataTypes.STRING,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt: {
            field: 'updatedAt',
            type: DataTypes.DATE,
            allowNull: false,
        },
    });
    return User;
};
