const Sequelize = require('sequelize');
const database = require('../db');

const HistoricoExame = database.define('historicoExame', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    paciente_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    data_inicio_tratamento: Sequelize.DATE,
    observacao: Sequelize.TEXT
})

module.exports = HistoricoExame;