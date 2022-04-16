module.exports = app => {
    const travelAgency = require("../controllers/travel_agency.controller.js")
    const {auth} = require("../middleware")

    var router = require("express").Router()

    router.post("/",travelAgency.create)

    router.get("/:id", travelAgency.findById)

    router.put("/update/:id", [auth.verifyToken, auth.isOwner], travelAgency.updateAll)
    router.put("/updateuser/:id", [auth.verifyToken,auth.isAdmin], travelAgency.updateUser)

    app.use('/travelagency', router)
}