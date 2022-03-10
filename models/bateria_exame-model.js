const Sequelize = require('sequelize');
const database = require('../db');

const BateriaExame = database.define('bateriaExame', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    pedido_exame_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    descricao: Sequelize.TEXT,
})

module.exports = TipoExame;