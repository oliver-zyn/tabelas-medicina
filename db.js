require('dotenv').config()
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.CONNECTION_PG, {dialect: 'postgres'});

module.exports = sequelize;

