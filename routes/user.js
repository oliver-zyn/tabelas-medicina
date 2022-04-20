const express = require('express')
const router = express.Router()
const userController = require('../controllers/user')

router.post('/register', userController.register)

router.post('/update', userController.update)

router.get('/all', userController.all)

module.exports = router
