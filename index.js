(async () => {
    const database = require('./db');
    const TipoMensagem = require('./models/tipo_mensagem-model');

    try {
        const resultado = await database.sync();
    } catch (error) {
        console.log(error);
    }

    try {
        const resTipoMsg = await TipoMensagem.create({
            mensagem: 'teste de mensagem',
            titulo: 'teste titulo da mensagem'
        })
    } catch (error) {
        console.log(error);
    }

    const tipoMsg = await TipoMensagem.findAll({})
    console.log(tipoMsg);

})()