const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

router.post('/register', userController.register)

router.get('/all', userController.all)

module.exports = router
