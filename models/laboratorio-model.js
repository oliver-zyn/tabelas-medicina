const Sequelize = require('sequelize');
const database = require('../db');


const Laboratorio = database.define('laboratorio', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_laboratorio: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: Sequelize.STRING(100),
    telefone: Sequelize.STRING(12),
    cep: Sequelize.STRING(12),
    email: Sequelize.STRING(100)
})

// 1 - 1
Produtos.belongsTo(Fabricante, {
    constraint: true,
    foreignKey: 'idFabricante'
})


// 1 - n 
Fabricante.hasMany(Produtos, {
    foreignKey: 'idFabricante'
})

// n - n
Produtos.belongsToMany(Categoria, {
    through: {
        model: CategoriaProduto
    },
    foreignKey: 'idProduto',
    constraint: true
})

Categoria.belongsToMany(Produtos, {
    through: {
        model: CategoriaProduto
    },
    foreignKey: 'idCategoria',
    constraint: true
})

Produtos.hasMany(CategoriaProduto, { foreignKey: "idProduto"})
Produtos.belongsTo(Produtos, { foreignKey: "idProduto"})
Produtos.hasMany(CategoriaProduto, { foreignKey: "idCategoria"})
Produtos.belongsTo(Categoria, { foreignKey: "idCategoria"})

module.exports = Laboratorio;