const Sequelize = require('sequelize');
const database = require('../db');

const Convenio = database.define('convenio', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome_convenio: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Convenio;