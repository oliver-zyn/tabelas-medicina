const Sequelize = require('sequelize');
const database = require('../db');

const Exame = database.define('exame', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    bateria_exame_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    descricao: Sequelize.TEXT,
    resultado: Sequelize.TEXT,
    data: Sequelize.DATE
})

module.exports = Exame;