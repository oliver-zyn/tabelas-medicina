const Sequelize = require('sequelize');
const database = require('../db');


const Usuario = database.define('usuario', {
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
    login: Sequelize.STRING,
    senha: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    ativo: Sequelize.BOOLEAN,
    email: Sequelize.STRING(100)
})

module.exports = Usuario;