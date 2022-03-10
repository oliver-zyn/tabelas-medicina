const Sequelize = require('sequelize');
const database = require('../db');

const Esquema = database.define('tb_esquema', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tipo_capilar_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    paciente_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    dias_sessao_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    data_inicio: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    data_fim: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    id_modelo_capilar: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

module.exports = Esquema;