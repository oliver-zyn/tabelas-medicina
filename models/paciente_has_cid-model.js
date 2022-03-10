const Sequelize = require('sequelize');
const database = require('../db');

const PacienteHasCid = database.define('tb_paciente_has_tb_cid', {
    paciente_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    cid_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    ds_data: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
});

module.exports = PacienteHasCid;