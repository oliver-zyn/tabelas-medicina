const Sequelize = require('sequelize');
const database = require('../db');

const Hospitalizacao = database.define('hospitalizacao', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    paciente_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    nome_hospital: Sequelize.STRING,
    data_iinternacao: Sequelize.DATE,
    data_alta: Sequelize.DATE,
    observasao: Sequelize.TEXT
})

module.exports = Hospitalizacao;