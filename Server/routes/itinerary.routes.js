module.exports = app => {
    const itinerary = require("../controllers/itinerary.controller.js");
    const {auth} = require("../middleware")

    var router = require("express").Router();

    router.post("/",itinerary.create)

    router.get("/travelpackage/:package_id", itinerary.findByTravelPackage)

    router.put("/:id", itinerary.update)

    router.delete("/:id", itinerary.removeById,)

    app.use("/itinerary", router)
}