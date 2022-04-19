const express = require('express')
const router = express.Router()
const bateriaExameController = require('../controllers/bateriaExame')

router.post('/register', bateriaExameController.register)

router.get('/all', bateriaExameController.all)

module.exports = router
