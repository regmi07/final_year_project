const verifypayment = require('../controllers/verifypayment.controller')
var router = require("express").Router()

module.exports = app => {
    router.post('/', verifypayment.verifypayment)
    app.use('/khalti', router)
}