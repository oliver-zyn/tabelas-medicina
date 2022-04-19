const express = require('express')
const router = express.Router()
const convenioController = require('../controllers/convenio')

router.post('/register', convenioController.register)

router.get('/all', convenioController.all)

module.exports = router
