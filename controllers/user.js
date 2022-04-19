const Usuario = require('../models/usuario-model');
const database = require('../db');

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
                return res.status(400).send("Email já existe");
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

    all: async (req, res) => {
        try {
            let usuarios = await Usuario.findAll()

            res.status(200).send(usuarios)
        } catch (error) {
            res.status(500).send('Ocorreu um erro na busca dos usuários')
        }
    }
}

module.exports = userController