const Sequelize = require('sequelize');
const database = require('../db');

const PedidoExame = database.define('pedidoExame', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    usuario_id: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    laboratorio_id: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao_grupo: Sequelize.STRING(100),
    exame_extra: Sequelize.STRING(12),
    data_coleta: Sequelize.STRING(12),
    resultado_exame: Sequelize.TEXT
})

module.exports = PedidoExame;