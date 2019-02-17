'use strict';
const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Restaurants = sequelize.define('Restaurants', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    lon: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    lat : {
      type: DataTypes.DOUBLE,
      allowNull: false,
    }
  });
  Restaurants.associate = (models) => {
    Restaurants.hasMany(models.RestaurantPins, { foreignKey:'restaurant_id', sourceKey:'id'})
  };
  return Restaurants;
};
