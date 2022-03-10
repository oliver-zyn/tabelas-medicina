const Sequelize = require('sequelize');
const database = require('../db');

const UsuarioHasFuncao = database.define('tb_usuario_has_tb_funcao', {
    usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    funcao_id: {
        type: Sequelize.INTEGER,
       allowNull: false,
    },
    ds_data: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
});

module.exports = UsuarioHasFuncao;