const Convenio = require('../models/convenio-model');
const database = require('../db');

let convenioController = {
    register: async (req, res) => {
        try  {
            const resultado = await database.sync();

            let nome_convenio = req.body.nome_convenio

            let nomeExiste = await Convenio.findOne({ 
                where: { 
                    nome_convenio
                } 
            })

            if (nomeExiste) {
                return res.status(400).send("Nome já existe");
            }

            const result = await Convenio.create({
                nome_convenio
            })

            res.status(200).send('Convênio registrado com sucesso!')

        } catch (error) {
            console.log(error)
            res.status(500).send('Ocorreu um erro inesperado')
        }
    },

    all: async (req, res) => {
        try {
            let convenios = await Convenio.findAll()

            res.status(200).send(convenios)
        } catch (error) {
            res.status(500).send('Ocorreu um erro na busca dos usuários')
        }
    }
}

module.exports = convenioController