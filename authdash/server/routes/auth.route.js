const express = require('express')
const router = express.Router()

const {
    validRegister,
    validLogin,
    forgotPasswordValidator,
    resetPasswordValidator,
    validSign
} = require('../client/src/helpers/valid')

//Load Controllers
const {
    registerController,
    activationController,
    loginController
} = require('../controllers/auth.controller.js')

router.post('/register', validSign, registerController)
router.post('/login', validLogin, loginController)
router.post('/activation', activationController)
// router.post('/dashboard')

module.exports = router