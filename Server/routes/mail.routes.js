const verifyemail = require('../controllers/verifyemail.controller')
var router = require("express").Router()

module.exports = app => {
    router.get('/', verifyemail.verifyemail)
    app.use('/verify', router)
}