module.exports = app => {
    const verifypayment = require('../controllers/verifypayment.controller')
    const payment = require('../controllers/payment.controller')
    const {auth} = require("../middleware")

    var router = require("express").Router()

    router.post('/', [auth.verifyToken], payment.create)
    router.post('/khalti', verifypayment.verifypayment)
    
    app.use('/payment', router)
}