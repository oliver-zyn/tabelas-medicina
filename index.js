(async () => {
    const database = require('./db');
    const Usuario = require('./models/usuario-model')
    //const Produto = require('./models/laboratorio-model');

    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }

    try {
        const usuario = await Usuario.create({
            nome: 'Usuario 1 test',
            login: 'UserName',
            senha: '1234',
            ativo: true,
            email: 'user@gmail.com'
        })
    } catch (err) {
        console.log(err);
    }

    const usuarios = await Usuario.findAll({})
    console.log(usuarios);

    

})()