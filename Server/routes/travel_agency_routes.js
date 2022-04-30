module.exports = app => {
    const travelAgency = require("../controllers/travel_agency.controller.js")
    const {auth} = require("../middleware")

    var router = require("express").Router()

    router.post("/",travelAgency.create)

    router.get("/unverifiedtravelagency", travelAgency.getUnverifiedTravelAgency)
    router.get("/:id", travelAgency.findById)

    router.put("/update/:id", [auth.verifyToken, auth.isOwner], travelAgency.updateAll)
    router.put("/updateuser/:id", [auth.verifyToken,auth.isAdmin], travelAgency.updateUser)
    router.put("/verifytravelagency/:agencyId", travelAgency.verifyTravelAgency)

    app.use('/travelagency', router)
}