const Sequelize = require('sequelize');
const database = require('../db');

const AcessoVascular = database.define('acessoVascular', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    paciente_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    descricao: Sequelize.TEXT,
})

module.exports = AcessoVascular;