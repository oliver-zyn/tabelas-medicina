const Sequelize = require('sequelize');
const database = require('../db');

const AvaliacaoAntropometrica = database.define('tb_avaliacao_antropometrica', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    paciente_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    data_avaliacao: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    peso: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    altura: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    pressao_arterial: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    medidas_corporeas: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
});

module.exports = AvaliacaoAntropometrica;