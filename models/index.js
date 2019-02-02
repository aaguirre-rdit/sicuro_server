const Sequelize = require("sequelize");
const path = require('path');
const fs = require('fs');
const config = require('../config/config');
const basename = path.basename(__filename);
const db = {};
const env = 'development';
const sequelize = new Sequelize(config[env].database, config[env].username, config[env].password, {
  host: config[env].host,
  dialect: config[env].dialect,
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
fs
    .readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        console.log(__dirname, file)
        const model = sequelize['import'](path.join(__dirname, file));
        db[model.name] = model;
        console.log(db)
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db['sequelize'] = sequelize;
db['Sequelize'] = Sequelize;
module.exports = db;
