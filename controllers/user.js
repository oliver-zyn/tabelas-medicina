const Usuario = require('../models/usuario-model');
const database = require('../db');
const { Op } = require("sequelize");

let userController = {
    register: async (req, res) => {
        try  {
            const resultado = await database.sync();

            let {nome, email, login, senha, ativo} = req.body

            let emailExiste = await Usuario.findOne({ 
                where: { 
                    email
                } 
            })

            if (emailExiste) {
                return res.status(400).send("O email já existe");
            }

            const result = await Usuario.create({
                nome, login, senha, ativo, email
            })

            res.status(200).send('Usuário registrado com sucesso!')

        } catch (error) {
            console.log(error)
            res.status(500).send('Ocorreu um erro inesperado')
        }
    },

    update: async (req, res) => {

        let {id, nome, email, login, senha, ativo} = req.body

        try {
            const result = Usuario.update(
                {nome, email, login, senha, ativo}, { where: { id } }
            )

            res.status(200).send('Usuário atualizado com sucesso!')
            
        } catch (error) {
            res.status(500).send('Ocorreu um erro na alteração do usuário')
        }
    },

    all: async (req, res) => {
        try {
            let usuarios = await Usuario.findAll({attributes: ['id', 'nome', 'login', 'senha', 'ativo', 'email'], order: ['id']})

            res.status(200).send(usuarios)
        } catch (error) {
            res.status(500).send('Ocorreu um erro na busca dos usuários')
        }
    }
}

module.exports = userController