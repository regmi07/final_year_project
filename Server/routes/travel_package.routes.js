module.exports = app => {
    const travelPackage = require("../controllers/travel_package.controlller.js")
    const {auth} = require("../middleware")

    var router = require("express").Router()

    router.post("/", [auth.verifyToken, auth.isOwner], travelPackage.create)

    router.get("/avialablepackage", travelPackage.findAvailablePackage)
    router.get("/travelagency/:travel_agency_id", travelPackage.findByTravelAgency)
    router.get("/:id", travelPackage.findById)

    app.use('/travelpackage', router)
}