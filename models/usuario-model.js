const Sequelize = require('sequelize');
const database = require('../db');


const Usuario = database.define('tb_usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ativo: Sequelize.BOOLEAN,
    email: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
}, {freezeTableName: true})

module.exports = Usuario;