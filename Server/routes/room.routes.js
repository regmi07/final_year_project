module.exports = app => {
    const rooms = require("../controllers/room.controller.js");
    const {auth} = require("../middleware")

    var router = require("express").Router()

    router.post("/", [auth.verifyToken, auth.isAdmin], rooms.create)

    router.get("/availablerooms", rooms.findRoomByHotel)

    app.use('/rooms', router)
}