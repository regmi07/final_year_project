module.exports = app => {
    const travelPackageBooking = require("../controllers/travel_package.booking.controller.js")
    const {auth} = require("../middleware")

    var router = require("express").Router()

    router.post("/", [auth.verifyToken], travelPackageBooking.create)

    router.get("/:id", [auth.verifyToken], travelPackageBooking.findById)
    router.get("/user/:user_id", [auth.verifyToken], travelPackageBooking.findByUser)

    app.use('/travelpackage/booking', router)
}