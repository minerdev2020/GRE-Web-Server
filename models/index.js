const Sequelize = require('sequelize');
const House = require('./house');
const Image = require('./image');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;

db.House = House;
db.Image = Image;

House.init(sequelize);
Image.init(sequelize);

House.associate(db);
Image.associate(db);

module.exports = db;
