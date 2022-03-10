const Sequelize = require('sequelize');
const database = require('../db');

const EvolucaoClinica = database.define('evolucaoClinica', {
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
    data_evolucao: Sequelize.DATE,
    assunto: Sequelize.TEXT,
    observacao: Sequelize.TEXT,
    area_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = EvolucaoClinica;