module.exports = app => {
    const booking = require("../controllers/booking.controller.js")
    const {auth} = require("../middleware")

    var router = require("express").Router()

    router.post("/", [auth.verifyToken], booking.create)

    router.get("/user/:userId", [auth.verifyToken], booking.findByUser)

    app.use('/booking', router)
}