'use strict';
const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const ConversationCards = sequelize.define('ConversationCards', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    expression_number: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    country_code: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    expression: {
      type:DataTypes.STRING,
      allowNull:true,
    }
  });
  return ConversationCards;
};
