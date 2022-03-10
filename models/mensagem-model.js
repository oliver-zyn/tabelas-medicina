const Sequelize = require('sequelize');
const database = require('../db');

const Mensagem = database.define('tb_mensagem', {
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
    status_mensagem_cd_status: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tipo_mensagem_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    data_emissao: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

module.exports = Mensagem;