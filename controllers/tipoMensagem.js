const TipoMensagem = require('../models/tipo_mensagem-model');
const database = require('../db');

let tipoMensagemController = {
    register: async (req, res) => {
        try  {
            const resultado = await database.sync();

            let {mensagem, titulo} = req.body

            const result = await TipoMensagem.create({
                mensagem, titulo
            })

            res.status(200).send('Mensagem registrada com sucesso!')

        } catch (error) {
            console.log(error)
            res.status(500).send('Ocorreu um erro inesperado')
        }
    },

    all: async (req, res) => {
        try {
            let mensagens = await TipoMensagem.findAll()

            res.status(200).send(mensagens)
        } catch (error) {
            res.status(500).send('Ocorreu um erro na busca dos usuários')
        }
    }
}

module.exports = tipoMensagemController