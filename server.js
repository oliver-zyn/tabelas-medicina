const express = require('express');
const database = require('./db')
const path = require('path')
const app = express()
const PORT = 5000

app.use(express.static(path.join(__dirname, './public/')))

app.get('/all', async (req, res) => {
    const selectResult = await database.findAll();
    res.json(JSON.stringify(selectResult))
})

app.post('/new', express.json(), async (req, res) => {
    try {
        const resultado = await database.sync();

        const newProduct = await Produto.create({
            nome: req.body.nome,
            preco: req.body.preco,
            descricao: req.body.descricao
        })

        res.send('Sucesso!')
    } catch (error) {
        res.send(error)
    }
})

app.get('/all', async (req, res) => {
    const produtos = await Produto.findAll({});
    res.json(produtos)
})

app.listen(PORT, (err) => {
    if (!err) {
        console.log('Server rodando na porta', PORT);
    } else {
        console.log(err);
    }
})