const BateriaExame = require('../models/bateria_exame-model');
const database = require('../db');

let bateriaExameController = {
    register: async (req, res) => {
        try  {
            const resultado = await database.sync();

            let {pedido_exame_id, descricao} = req.body

            const result = await BateriaExame.create({
                pedido_exame_id, descricao
            })

            res.status(200).send('Bateria Exame registrada com sucesso!')

        } catch (error) {
            console.log(error)
            res.status(500).send('Ocorreu um erro inesperado')
        }
    },

    all: async (req, res) => {
        try {
            let bateriaExames = await BateriaExame.findAll()

            res.status(200).send(bateriaExames)
        } catch (error) {
            res.status(500).send('Ocorreu um erro na busca dos usuários')
        }
    }
}

module.exports = bateriaExameController