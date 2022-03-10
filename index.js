(async () => {
    const database = require('./db');
    //const Produto = require('./models/laboratorio-model');

    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }

    

})()