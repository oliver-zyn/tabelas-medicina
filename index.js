(async () => {
    const database = require('./db');
    const Produto = require('./models');

    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }

})()