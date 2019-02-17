'use strict';
const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const AllergyDict = sequelize.define('AllergyDict', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        language:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        dictionary:{
            type: DataTypes.JSON,
            allowNull: true,
        },
    });
    return AllergyDict;
};
