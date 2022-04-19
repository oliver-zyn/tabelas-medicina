const express = require('express')
const router = express.Router()
const tipoMensagemController = require('../controllers/tipoMensagem')

router.post('/register', tipoMensagemController.register)

router.get('/all', tipoMensagemController.all)

module.exports = router
