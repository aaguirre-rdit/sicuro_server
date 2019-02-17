'use strict';
const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const RestaurantPins = sequelize.define('RestaurantPins', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        restaurant_id :{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
    RestaurantPins.associate = (models) => {
        RestaurantPins.belongsTo(models.Restaurants, {foreignKey:'restaurant_id'});
        RestaurantPins.belongsTo(models.User, {foreignKey:'user_id'})
    };
    return RestaurantPins;
};
